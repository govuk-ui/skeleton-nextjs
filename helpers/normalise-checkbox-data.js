import { checkboxes } from '@/pages/api/validation/validation-types';

export const normaliseCheckboxData = (data, config) => {
  Object.keys(config.validation).forEach((key) => {
    if (config.validation[key]?.type === checkboxes) {
      if (!data[key]) {
        data[key] = [];
      } else if (!Array.isArray(data[key])) {
        data[key] = [data[key]];
      }
    }
  });
  return data;
}
