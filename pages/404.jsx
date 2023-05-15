import { Grid, Typography } from 'govuk-ui';

export default function Custom404() {
  return (
    <Grid variant="row">
      <Grid variant="two-thirds">
        <Typography variant="l" component="h1">
          Page not found
        </Typography>
        <Typography>
          If you typed the web address, check it is correct.
        </Typography>
        <Typography>
          If you pasted the web address, check you copied the entire address.
        </Typography>
      </Grid>
    </Grid>
  );
}
