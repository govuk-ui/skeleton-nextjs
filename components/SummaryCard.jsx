import { Typography, Button } from 'govuk-ui';
import Link from 'next/link';

export const SummaryCard = ({ title, description, href, buttonText = 'Start' }) => {
  return (
    <div className="govuk-!-padding-bottom-7">
      <Typography variant="m" component="h3">
        { title }
      </Typography>
      { description && (
        <Typography>
          { description }
        </Typography>
      )}
      <Link href={href}>
        <Button>
          { buttonText }
        </Button>
      </Link>
    </div>
  )
}
