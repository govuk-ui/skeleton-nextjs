import connectRedis from './redis-client';
import { getSQLite, setSQLite } from './sqlite-client';

/**
 * Returns complete data set from DB including validation.
 * @param sessionId
 * @returns {Promise<any>}
 */
export const getSessionData = async (sessionId) => {
  try {
    if (process.env.SESSION_STORAGE === 'redis') {
      const redis = await connectRedis();
      const storedData = await redis.get(sessionId);
      if (storedData) {
        return JSON.parse(storedData);
      }
      return null;
    }
    const storedData = await getSQLite(sessionId);
    if (storedData) {
      return JSON.parse(storedData);
    }
    return null;
  } catch (e) {
    console.log(`Unable to get data for session: ${sessionId}`)
  }
}

/**
 * Returns form data, no validation data.
 * @param sessionId
 * @returns {Promise<any>}
 */
export const getFormData = async (sessionId) => {
  const storedData = await getSessionData(sessionId);
  return storedData?.data;
}

/**
 * Returns validation data, no form data.
 * @param sessionId
 * @returns {Promise<any>}
 */
export const getValidationErrors = async (sessionId) => {
  const storedData = await getSessionData(sessionId);
  return storedData?.validation;
}

/**
 * Returns form data for specific page.
 * @param sessionId
 * @param pageId
 * @returns {Promise<*>}
 */
export const getDataForPage = async (sessionId, pageId) => {
  const formData = await getFormData(sessionId)
  return formData?.[pageId];
}

/**
 * Sets the complete form data object, does not affect the validation data.
 * @param sessionId
 * @param data
 * @returns {Promise<void>}
 */
export const setFormData = async (sessionId, data) => {
  try {
    const storedData = await getSessionData(sessionId) || Object.create(null);
    const updatedData = Object.assign(storedData, {
      data
    });
    if (process.env.SESSION_STORAGE === 'redis') {
      const redis = await connectRedis();
      await redis.set(sessionId, JSON.stringify(updatedData));
    } else {
      await setSQLite(sessionId, JSON.stringify(updatedData));
    }
  } catch (e) {
    console.log("Error setting data")
    console.log(e)
  }
}

/**
 * Sets the complete validation data object, does not affect the form data.
 * @param sessionId
 * @param validation
 * @returns {Promise<void>}
 */
export const setValidationErrors = async (sessionId, validation) => {
  try {
    const storedData = await getSessionData(sessionId) || Object.create(null);
    if (process.env.SESSION_STORAGE === 'redis') {
      const updatedData = Object.assign(storedData, {
        validation
      });
      const redis = await connectRedis();
      await redis.set(sessionId, JSON.stringify(updatedData));
    } else {
      const updatedData = Object.assign(storedData, {
        validation
      });
      await setSQLite(sessionId, JSON.stringify(updatedData));
    }
  } catch (e) {
    console.log("Error setting validation data")
    console.log(e)
  }
}

/**
 * Sets the data for a specific page in the data using pageId.
 * @param sessionId
 * @param pageId
 * @param pageData
 * @returns {Promise<void>}
 */
export const setDataForPage = async (sessionId, pageId, pageData) => {
  try {
    const storedData = await getFormData(sessionId) || Object.create(null);
    const updatedData = Object.assign(storedData, {
      [pageId]: pageData
    });
    await setFormData(sessionId, updatedData)
  } catch (e) {
    console.log(`Unable to setDataForPage: ${pageId}`)
    console.log(e)
  }
}

export const setValidationErrorsForPage = async (sessionId, pageId, validationData) => {
  try {
    const storedValidationData = await getValidationErrors(sessionId) || Object.create(null);
    const updatedValidationData = Object.assign(storedValidationData, {
      [pageId]: validationData
    });
    await setValidationErrors(sessionId, updatedValidationData)
  } catch (e) {
    console.log(`Unable to setValidationErrorsForPage: ${pageId}`)
    console.log(e)
  }
}

export const getValidationErrorsForPage = async (sessionId, pageId) => {
  const validationErrors = await getValidationErrors(sessionId)
  return validationErrors?.[pageId];
}

export const clearValidationErrorsForPage = async (sessionId, pageId) => {
  try {
    const storedValidationData = await getValidationErrors(sessionId) || Object.create(null);
    const { [pageId]: validationDataToClear, ...remainingValidationData } = storedValidationData;
    await setValidationErrors(sessionId, remainingValidationData);
  } catch (e) {
    console.log(`Unable to setValidationErrorsForPage: ${pageId}`)
    console.log(e)
  }
}
