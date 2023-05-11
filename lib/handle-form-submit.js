'use server';
import { headers, cookies } from 'next/headers';
import { notFound, redirect } from 'next/navigation';
import { clearValidationErrorsForPage, setDataForPage, setValidationErrorsForPage } from '@/lib/session';
import validate from './validate';
import router from './router';

export const handleFormSubmit = async (formData) => {
  const nextHeaders = headers();
  const nextCookies = cookies();
  const pageUrl = nextHeaders.get('next-url');

  if (!pageUrl) notFound();

  const pageId = pageUrl.split('/').pop(); // Last part of the path, e.g. page-1
  const basePath = pageUrl.split('/').slice(0, -1).join('/'); // Everything before the last part of the path, e.g. /mount-url/example

  let nextPage;
  try {
    const sessionId = nextCookies.get(process.env.SESSION_COOKIE_NAME).value;
    // Next.js adds a hidden field to the form with the name $ACTION_ID, we don't want to store this in the session data
    const parsedData = Object.fromEntries([...formData.entries()].filter(([key]) => !key.includes('$ACTION_ID')));
    await setDataForPage(sessionId, pageId, parsedData);
    let pageConfig;
    try {
      pageConfig = await import(`../page-configurations${pageUrl}.js`);
    } catch (e) {
      console.log(`No page config found for page ${pageUrl} or config is badly formatted, redirecting back to ${pageUrl}`);
      nextPage = pageUrl;
    }
    if (pageConfig) {
      const validationErrors = await validate(sessionId, pageId, pageConfig);
      if (validationErrors) {
        await setValidationErrorsForPage(sessionId, pageId, validationErrors);
        nextPage = pageUrl;
      } else {
        console.log(`No validation errors, clearing any existing validation state for page: ${pageId}`);
        await clearValidationErrorsForPage(sessionId, pageId);
        nextPage = await router('start', sessionId, basePath);
      }
    }
  } catch (e) {
    console.log('Error: ', e);
  }
  redirect(nextPage);
};
