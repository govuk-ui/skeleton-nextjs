import { getDataForPage } from "@/lib/session";
import { object } from 'yup';

export default async function validate(sessionId, pageId, pageConfig) {
  const pageData = await getDataForPage(sessionId, pageId);

  console.log(pageData);

  if (!pageConfig.validation) {
    console.log(`No validation defined in config for page: ${pageId}, continuing without validation`)
    return null;
  }

  // Convert validation object structure to Yup schema ready to validate.
  const validationSchema = object(pageConfig.validation);

  console.log(validationSchema);

  try {
    console.log(`Validating data for page: ${pageId}`)
    await validationSchema.validate({ ...pageData, testField: '' }, { abortEarly: false });
  } catch (validationErrors) {
    console.log(`Validation errors found for page: ${pageId}`);
    console.log('errors: ', validationErrors);
    return yupErrorToErrorObject(validationErrors);
  }
}

const yupErrorToErrorObject = (yupError) => {
  const errorObject = {};

  yupError.inner?.forEach((x) => {
    if (x.path !== undefined && !errorObject[x.path]) {
      errorObject[x.path] = x.errors[0];
    }
  });

  return errorObject;
}
