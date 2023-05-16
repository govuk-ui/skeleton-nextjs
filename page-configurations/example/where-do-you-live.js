import { urls } from '@/lib/urls';
import { value } from '@/lib/match';
import { validationError } from '@/pages/api/validation/validation-error';
import { radios } from '@/pages/api/validation/validation-types';

module.exports = {
  next: [
    {
      page: urls.whereDoYouLiveOther,
      condition: {
        field: 'whereDoYouLive',
        value: 'other',
        match: value,
      }
    },
    {
      page: urls.contactPreferences,
    },
  ],
  validation: {
    whereDoYouLive: {
      type: radios,
      errors: {
        required: validationError('You must select an option.'),
      },
    },
  }
}
