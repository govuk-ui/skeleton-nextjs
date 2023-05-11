import { urls } from '@/lib/urls';
import { string, mixed } from 'yup';
import { validationError } from '@/lib/validation-error';
import { DateTime } from 'luxon';

const dateValidation = (prefix, value) => {
  const day = value[`${prefix}-day`];
  const month = value[`${prefix}-month`];
  const year = value[`${prefix}-year`];

  const date = DateTime.fromObject({ day, month, year })

  return date.isValid;
}

module.exports = {
  next: 'nationality',
  validation: {
    'dateOfBirth-day': string()
      .test('date-of-birth', validationError('Enter a valid date of birth.'), value => {
        console.log("VALUE: ", value);
      })
      .required(validationError('Enter a day.'))

  }
}
