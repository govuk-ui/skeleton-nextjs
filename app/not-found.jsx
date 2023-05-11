import { Typography } from 'govuk-ui';

export default function NotFound() {
  return (
    <>
      <Typography variant="l" component="h1">
        Page not found
      </Typography>
      <Typography>
        If you typed the web address, check it is correct.
      </Typography>
      <Typography>
        If you pasted the web address, check you copied the entire address.
      </Typography>
    </>
  );
}
