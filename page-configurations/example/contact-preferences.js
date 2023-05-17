import { urls } from '@/lib/urls';
import { validationError } from '@/pages/api/validation/validation-error';
import { checkboxes, textInput } from '@/pages/api/validation/validation-types';

module.exports = {
  next: urls.checkYourAnswers,
  validation: {
    contactPreferences: {
      type: checkboxes
    },
    emailAddress: {
      type: textInput,
      condition: {
        field: 'contactPreferences',
        value: 'email',
      },
      errors: {
        required: validationError('You must enter an email address.'),
      }
    },
    phoneNumber: {
      type: textInput,
      condition: {
        field: 'contactPreferences',
        value: 'phone',
      },
      errors: {
        required: validationError('You must enter a phone number.'),
      }
    }
  }
}
