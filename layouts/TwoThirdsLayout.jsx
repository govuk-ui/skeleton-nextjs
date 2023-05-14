import { BackLink, Grid } from 'govuk-ui';
import { renderErrorSummary } from '@/helpers/render-error-summary';

export const TwoThirdsLayout = ({ pageId, data, errors, children }) => {
  return (
    <Grid variant="row">
      <Grid variant="two-thirds">
        <form action={`/api/form-handler?pageId=${pageId}`} method="post">
          {/* TODO: Dynamically get back link href */}
          <BackLink href='/' />
          { errors && renderErrorSummary(errors) }
          { children }
        </form>
      </Grid>
    </Grid>
  )
}
