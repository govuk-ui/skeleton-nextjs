import { urls } from '@/lib/urls';
import { validationError } from '@/pages/api/validation/validation-error';
import { dateInput } from '@/pages/api/validation/validation-types';

module.exports = {
  next: [
    {
      page: urls.whereDoYouLive,
    },
  ],
  validation: {
    dateOfBirth: {
      type: dateInput,
      errors: {
        required: validationError('Enter a valid date of birth.'),
      },
    },
  }
}
