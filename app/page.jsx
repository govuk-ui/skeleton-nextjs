import { Button, Typography } from 'govuk-ui';
import Link from 'next/link';

export default function Index() {
  return (
    <>
      <Typography variant="l" component="h1">
        App directory
        {/*{ t('home:pageTitle') }*/}
      </Typography>
      <Link href={'/example/start'}>
        <Button isStartButton>
          {/*{ t('common:buttons.start') }*/}
        </Button>
      </Link>
    </>
  );
}
