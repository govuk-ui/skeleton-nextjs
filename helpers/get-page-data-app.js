import { cookies } from 'next/headers';
import { getDataForPage, getValidationErrorsForPage } from "@/lib/session";

export const getPageData = async (pageId) => {
  const cookieStore = cookies();

  const sessionId = cookieStore.get(process.env.SESSION_COOKIE_NAME)?.value;
  const data = await getDataForPage(sessionId, pageId) || null;
  const validation = await getValidationErrorsForPage(sessionId, pageId) || null;

  // console.log(`Page data for page ${pageId}: `, data);
  // console.log(`Validation errors for page ${pageId}: `, validation);

  return {
    data,
    validation,
  }
}
