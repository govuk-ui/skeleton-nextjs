import { Grid } from 'govuk-ui';
import { handleFormSubmit } from '@/lib/handle-form-submit';

export default function TwoThirdsLayout({ children }) {
  return (
    <Grid variant="row">
      <Grid variant="two-thirds">
        <form action={handleFormSubmit}>
          { children }
        </form>
      </Grid>
    </Grid>
  );
}
