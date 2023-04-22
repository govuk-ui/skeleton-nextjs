import {
  clearValidationErrorsForPage,
  setDataForPage,
  setValidationErrorsForPage
} from "@/lib/session";
import router from './router';
import validate from "./validate";

export default async function handler (req, res) {
  if (req.method === 'POST') {
    // pageId will be the full path to the page, e.g. /example/page-1
    const { pageId } = req.query;
    // We'll use just the last part of the path as the pageSlug, e.g. page-1
    const pageSlug = pageId.split('/').pop();
    // Prefix is everything before the pageSlug, e.g. /example
    const pagePrefix = pageId.split('/').slice(0, -1).join('/');

    try {
      const sessionId = req.cookies[process.env.SESSION_COOKIE_NAME];
      await setDataForPage(sessionId, pageSlug, {
        ...req.body
      });

      let pageConfig;
      try {
        pageConfig = require(`./page-configurations${pageId}.js`);
      } catch (e) {
        console.log(`No page config found for page ${pageId} or config is badly formatted, redirecting back to ${pageId}`);
        return res.redirect(302, `${pageId}`);
      }

      if (pageConfig) {
        const validationErrors = await validate(sessionId, pageSlug, pageConfig);
        if (validationErrors) {
          await setValidationErrorsForPage(sessionId, pageSlug, validationErrors)
          return res.redirect(302, `${pageId}`);
        }

        console.log(`No validation errors, clearing any existing validation state for page: ${pageSlug}`)
        await clearValidationErrorsForPage(sessionId, pageSlug);

        const nextPage = await router(sessionId, pagePrefix);

        return res.redirect(302, `${pagePrefix}/${nextPage}`);
      }
    } catch (e) {
      console.log("Error: ", e)
    }
  }
}
