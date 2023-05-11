import { urls } from '@/lib/urls';
import { string } from 'yup';
import { validationError } from '@/lib/validation-error';

module.exports = {
  next: urls.dateOfBirth,
  validation: {
    fullName: string()
      .required(validationError('Enter a full name'))
  }
}
