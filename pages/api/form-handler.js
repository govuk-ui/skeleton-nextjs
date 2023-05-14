import {
  clearValidationErrorsForPage,
  setDataForPage,
  setValidationErrorsForPage
} from "@/lib/session";
import router from './router';
import validate from "./validate";

export default async function handler (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'Method Not Allowed' });
  }
  // pageId will be the full path to the page, e.g. /example/page-1
  const { pageId: fullPath } = req.query;
  const pathSegments = fullPath.split('/');
  // We'll use just the last part of the path as the lastSegment, e.g. page-1
  const lastSegment = pathSegments.pop();
  // Prefix is everything before the lastSegment, e.g. /example
  const pathBeforeLastSegment = pathSegments.join('/');

  console.log("Page ids");
  console.log(fullPath);
  console.log(lastSegment);
  console.log(pathBeforeLastSegment);

  try {
    const sessionId = req.cookies[process.env.SESSION_COOKIE_NAME];
    await setDataForPage(sessionId, lastSegment, {
      ...req.body
    });

    let pageConfig;
    try {
      pageConfig = await import(`../../page-configurations${fullPath}`);
    } catch (e) {
      console.error(`No page config found for page ${fullPath} or config is badly formatted, redirecting back to ${fullPath}`);
      console.error(e);
      return res.redirect(302, `${fullPath}`);
    }

    if (pageConfig) {
      const validationErrors = await validate(sessionId, lastSegment, pageConfig);
      if (validationErrors) {
        await setValidationErrorsForPage(sessionId, lastSegment, validationErrors)
        return res.redirect(302, `${fullPath}`);
      }

      console.log(`No validation errors, clearing any existing validation state for page: ${lastSegment}`)
      await clearValidationErrorsForPage(sessionId, lastSegment);

      // TODO: Figure out a way to make this root page configurable for each group of pages
      const rootPage = 'start'
      const nextPage = await router(rootPage, sessionId, pathBeforeLastSegment);

      return res.redirect(302, `${pathBeforeLastSegment}/${nextPage}`);
    }
  } catch (e) {
    console.error("Error: ", e);
    res.status(500).send({ error: 'Internal Server Error' });
  }
}
