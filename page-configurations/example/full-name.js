import { urls } from '@/lib/urls';
import { validationError } from '@/pages/api/validation/validation-error';
import { textInput } from '@/pages/api/validation/validation-types';

module.exports = {
  previous: urls.start,
  next: urls.dateOfBirth,
  validation: {
    firstName: {
      type: textInput,
      errors: {
        required: validationError('Enter a first name.'),
      },
    },
    middleNames: {
      type: textInput,
      options: {
        required: false, // Setting required to false won't show the error message if the field is empty, but will still validate the field if it has a value.
        maxLength: 50
      },
      errors: {
        maxLength: validationError('Middle names must be no more than 50 characters.'),
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
