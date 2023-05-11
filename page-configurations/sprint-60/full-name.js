import { urls } from '@/lib/urls';
import { string } from 'yup';
import { validationError } from '@/lib/validation-error';

module.exports = {
  next: urls.dateOfBirth,
  validation: {
    firstName: string()
      .required(validationError('Enter a first name.')),
    lastName: string()
      .when('firstName', {
        is: (firstName) => firstName?.length > 0,
        then: () => string()
          .required(validationError('Enter a last name.')),
      })
  }
}
