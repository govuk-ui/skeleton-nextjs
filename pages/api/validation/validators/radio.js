const {validationError} = require('@/pages/api/validation/validation-error');

class RadioValidator {
  constructor(options, errors) {
    this.options = {
      required: true,
    };

    Object.assign(this.options, options);

    this.errors = {
      required: validationError('You must select an option.'),
    };

    Object.assign(this.errors, errors);
  }

  validate(value) {
    if (this.options.required && !value) {
      this.error = this.errors.required
    }

    return this.error
  }
}

module.exports = RadioValidator;
