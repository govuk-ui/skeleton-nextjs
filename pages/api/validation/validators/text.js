const {validationError} = require('@/pages/api/validation/validation-error');

class TextValidator {
  constructor(options, errors) {
    this.name = '';
    this.valid = true;
    this.options = {
      required: true,
      maxLength: undefined,
      minLength: undefined,
      regEx: undefined,
    };

    Object.assign(this.options, options);

    this.errors = {
      required: validationError('You must enter a value.'),
      maxLength: validationError(`You must enter no more than ${this.options.maxLength} characters.`),
      minLength: validationError(`You must enter at least ${this.options.minLength} characters.`),
    };

    Object.assign(this.errors, errors);
  }

  validate(value) {
    if (this.options.required && !value) {
      this.valid = false;
      this.error = this.errors.required;
    }

    if (this.valid && this.options.maxLength && value.length > this.options.maxLength) {
      this.valid = false;
      this.error = this.errors.maxLength;
    }

    if (this.valid && this.options.minLength && value.length < this.options.minLength) {
      this.valid = false;
      this.error = this.errors.minLength;
    }

    if (this.valid && this.options.regEx) {
      const regEx = new RegExp(this.options.regEx, 'g');
      if (!regEx.test(''.concat(value))) {
        this.valid = false;
        this.error = this.errors.regEx;
      }
    }

    return this.error
  }
}

module.exports = TextValidator;
