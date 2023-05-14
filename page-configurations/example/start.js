import { urls } from '@/lib/urls';
import { validationError } from '@/lib/validation-error';
import { textInput } from '@/pages/api/validation/validation-types';

module.exports = {
  next: urls.fullName,
  validation: {
    fullName: {
      type: textInput,
      options: {
        minLength: 5,
      },
      errors: {
        required: validationError('Enter a first name.'),
        minLength: validationError('First name too short.'),
      },
    },
    lastName: {
      type: textInput,
      errors: {
        required: validationError('Enter a last name.'),
      },
    }
  }
}
