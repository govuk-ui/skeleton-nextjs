import { urls } from '@/lib/urls';
import { string } from 'yup';
import { validationError } from '@/lib/validation-error';

module.exports = {
  next: 'full-name',
  validation: {
    verificationCode: string()
      .required(validationError('Enter a verification code.'))
      .min(6, validationError('Verification code must be at least 6 characters'))
  }
}
