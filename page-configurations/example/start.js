import { urls } from '@/lib/urls';
import { string } from 'yup';
import { validationError } from '@/lib/validation-error';

module.exports = {
  next: urls.fullName,
  validation: {
    whereDoYouLive: string()
      .required(validationError('Select where you live?'))
  }
}
