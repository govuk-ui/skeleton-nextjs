const {validationError} = require('@/lib/validation-error');

class DropdownValidator {
  constructor(options, errors) {
    this.options = {
      required: true,
    };

    Object.assign(this.options, options);

    this.errors = {
      required: validationError('You must select an item.'),
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

module.exports = DropdownValidator;
