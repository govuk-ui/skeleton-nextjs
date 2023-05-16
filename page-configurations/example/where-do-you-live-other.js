import { urls } from '@/lib/urls';
import { validationError } from '@/pages/api/validation/validation-error';
import { textInput } from '@/pages/api/validation/validation-types';

module.exports = {
  next: [
    {
      page: urls.checkYourAnswers,
    },
  ],
  validation: {
    whereDoYouLiveOther: {
      type: textInput,
      errors: {
        required: validationError('Enter where you live.'),
      },
    },
  }
}
