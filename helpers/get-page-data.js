import { getDataForPage, getValidationErrorsForPage } from "@/lib/session";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

/**
 * Get the pageId, data and validation errors for a page
 * @param context
 * @returns {Promise<{props: {data: object || null, pageId: string, validation: object || null}}>}
 */
export const getPageData = async (context) => {
  const pageId = context.resolvedUrl.split('/').pop();
  const cookies = context.req.cookies;

  const locale = cookies.locale || 'en';

  const sessionId = cookies[process.env.SESSION_COOKIE_NAME];
  const data = await getDataForPage(sessionId, pageId) || null;
  const validation = await getValidationErrorsForPage(sessionId, pageId) || null;

  return {
    props: {
      pageId: context.resolvedUrl,
      data,
      validation,
      ...(await serverSideTranslations(locale)),
    }
  }
}
