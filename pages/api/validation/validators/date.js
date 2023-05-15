const {validationError} = require('@/pages/api/validation/validation-error');
import { DateTime } from 'luxon';

class DateValidator {
  constructor(options, errors) {
    this.options = {
      required: true,
    };

    Object.assign(this.options, options);

    this.fullYear = new Date().getFullYear();
    this.errors = {
      required: validationError('You must enter a value.'),
      requiredDay: validationError('You must enter a value for day.'),
      requiredMonth: validationError('You must enter a value for month.'),
      requiredYear: validationError('You must enter a value for year.'),
      validDay: validationError('You must enter a valid value for day.'),
      validMonth: validationError('You must enter a valid value for month.'),
      validYear: validationError('You must enter a valid value for year.'),
      invalidDate: validationError('You must enter a valid date.'),
    };

    Object.assign(this.errors, errors);
  }

  validate(value) {
    if (this.options.required && !value) {
      this.error = this.errors.required;
    }

    const parts = value.split('/');
    if (parts.includes('')) {
      this.error = this.errors.required;
    }

    return this.error
  }
}

module.exports = DateValidator;
