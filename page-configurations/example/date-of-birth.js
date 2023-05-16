import { urls } from '@/lib/urls';
import { validationError } from '@/pages/api/validation/validation-error';
import { dateInput } from '@/pages/api/validation/validation-types';
import { greaterThan } from '@/pages/api/validation/validation-matchers';

module.exports = {
  next: urls.contactPreferences,
  validation: {
    dateOfBirth: {
      type: dateInput,
      errors: {
        required: validationError('Enter a valid date of birth.'),
      },
    },
  }
}
