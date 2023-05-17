import { urls } from '@/lib/urls';
import { validationError } from '@/pages/api/validation/validation-error';
import { dateInput } from '@/pages/api/validation/validation-types';

module.exports = {
  previous: urls.fullName,
  next: urls.whereDoYouLive,
  validation: {
    dateOfBirth: {
      type: dateInput,
      errors: {
        required: validationError('Enter a valid date of birth.'),
      },
    },
  }
}
