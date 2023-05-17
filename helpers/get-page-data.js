import { getDataForPage, getValidationErrorsForPage } from "@/lib/session";
import { conditionMatch } from "@/pages/api/routing/condition-match";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

/**
 * Get the pageId, data and validation errors for a page
 * @param context
 * @returns {Promise<{props: {data: object || null, pageId: string, errors: object || null}}>}
 */
export const getPageData = async (context) => {
  const pageId = context.resolvedUrl.split('/').pop();
  const cookies = context.req.cookies;

  const locale = cookies.locale || 'en';

  const sessionId = cookies[process.env.SESSION_COOKIE_NAME];
  const data = await getDataForPage(sessionId, pageId) || null;
  const errors = await getValidationErrorsForPage(sessionId, pageId) || null;

  const backLink = await handleBackLink(context.resolvedUrl, data)

  return {
    props: {
      pageId: context.resolvedUrl,
      data,
      errors,
      backLink,
      ...(await serverSideTranslations(locale)),
    }
  }
}

export const handleBackLink = async (pathname, pageData) => {
  console.log('processing back link for ' + pathname);
  let backLink = '';
  try {
    const config = await import(`../page-configurations${pathname}.js`);
    if (!config || !config.previous) {
      backLink = '';
    } else if (config.previous === 'none') {
      backLink = '';
    } else {
      let routingConfig = config.previous;
      if (!Array.isArray(config.previous)) {
        routingConfig = [{
          page: config.previous,
        }];
        const routingMatch = conditionMatch(routingConfig, pageData);
        console.log(routingMatch);
        if (routingMatch) {
         backLink = routingMatch;
        }
      }
      console.log(backLink)
      return backLink;
    }
  } catch (e) {
    return;
  }
}
