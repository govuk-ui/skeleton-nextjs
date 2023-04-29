import { Button, Typography } from 'govuk-ui';
import Head from 'next/head';
import Link from 'next/link';
import { getPageData } from '@/helpers/get-page-data';
import { useTranslation } from 'next-i18next';

// To use SSR (Server Side Rendering) you must export a function called getServerSideProps from a page.
// Read more: https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
export const getServerSideProps = async (context) => await getPageData(context);

export default function Index({}) {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Example Service Name - GOV.UK</title>
      </Head>
      <Typography variant="l" component="h1">
        Example Service Name
      </Typography>
      <Typography>
        { t('common:pageTitle') }
      </Typography>
      <Link href={'/example/start'}>
        <Button isStartButton>
          Start
        </Button>
      </Link>
    </>
  )
}
