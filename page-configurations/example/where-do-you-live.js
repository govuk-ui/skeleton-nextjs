import { urls } from '@/lib/urls';
import { validationError } from '@/pages/api/validation/validation-error';
import { radios } from '@/pages/api/validation/validation-types';

module.exports = {
  next: [
    {
      page: urls.checkYourAnswers,
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
