import { getDataForPage } from '@/lib/session';
import { conditionMatch } from '@/pages/api/routing/condition-match';

export default async function route(rootPage, sessionId, pagePrefix = '') {
  console.log('Router running ...');

  if (rootPage) {
    console.log(`Root page is '${rootPage}'`);
    return await handleRouting(rootPage, pagePrefix, sessionId);
  } else {
    console.log('No root page set, aborting. Routing complete');
  }
}

async function handleRouting(pageId, pagePrefix, sessionId) {
  console.log(`Checking config for page '${pageId}'`);
  let config;
  try {
    config = await import(`../../../page-configurations${pagePrefix}/${pageId}`);
  } catch (err) {
    console.log(`Router error: no page config found for page ${pageId} or config is badly formatted`);
    return pageId;
  }
  let nextPage = config.next;
  if (Array.isArray(nextPage)) {
    console.log('Next page is an array of options ...');
    const data = await getDataForPage(sessionId, pageId);
    nextPage = conditionMatch(config.next, data);
  } else {
    console.log(`Next page is a single option '${nextPage}'`);
  }
  console.log(`Checking answers for page '${nextPage}'`);
  const nextPageData = await getDataForPage(sessionId, nextPage);
  if (!nextPageData) {
    console.log(`No answers for page '${nextPage}'. Sending user to '${nextPage}'. Routing complete`);
    return nextPage;
  } else {
    console.log(`Page '${nextPage}' already answered`);
    return await handleRouting(nextPage, pagePrefix, sessionId);
  }
}
