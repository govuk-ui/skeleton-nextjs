/* eslint-disable no-param-reassign */
import validationTypes from '@/pages/api/validation/validation-types';

const {
  TextValidator,
  DateValidator,
  CheckboxesValidator,
  RadioValidator,
  SelectValidator,
  MatchValidator,
} = require('./validators');

const handleValidation = (data, field, config) => {
  let validator = {};

  const validationOptions = config.options || {};

  switch (config.type) {
    case validationTypes.textInput:
      validator = new TextValidator(validationOptions, config.errors);
      break;
    case validationTypes.dateInput:
      validator = new DateValidator(validationOptions, config.errors);
      break;
    case validationTypes.checkboxes:
      validator = new CheckboxesValidator(validationOptions, config.errors);
      break;
    case validationTypes.radios:
      validator = new RadioValidator(validationOptions, config.errors);
      break;
    case validationTypes.select:
      validator = new SelectValidator(validationOptions, config.errors);
      break;
    case validationTypes.match:
      validator = new MatchValidator(validationOptions, config.errors);
      break;
    default:
      validator = new TextValidator(validationOptions, config.errors);
      break;
  }

  if (config.type === 'dateInput') {
    const dayValid = validator.validate(data[`${field}-day`], 'day');
    const monthValid = validator.validate(data[`${field}-month`], 'month');
    const yearValid = validator.validate(data[`${field}-year`], 'year');

    // TODO: Clean up the date validation
    if (dayValid) return dayValid;
    if (monthValid) return monthValid;
    if (yearValid) return yearValid;
  } else if (config.type === 'match') {
    return validator.validate(data[`${field}`], data[`${validationOptions.matchTo}`]);
  } else {
    return validator.validate(data[field]);
  }
};

export const validate = (data, config, pageId) => {
  if (!config.validation) {
    console.log(`No validation defined in config for page: ${pageId}, continuing without validation`)
    return null;
  }

  let errors = {};
  for (const [key, value] of Object.entries(config.validation)) {
    const validationResult = handleValidation(data, key, value);
    if (validationResult) {
      errors[key] = validationResult;
    }
  }
  if (Object.keys(errors).length === 0) {
    errors = null;
  }
  return errors;
};
