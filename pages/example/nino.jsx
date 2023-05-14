import { Typography } from 'govuk-ui';
import Head from 'next/head';
import { Button } from 'govuk-ui';
import { getPageData } from '@/helpers/get-page-data';
import { TwoThirdsLayout } from '@/layouts/TwoThirdsLayout';

export const getServerSideProps = async (context) => await getPageData(context);

export default function Nino({ pageId, data, errors }) {
  return (
    <TwoThirdsLayout pageId={pageId} data={data} errors={errors}>
      <Head>
        <title>NINO</title>
      </Head>

      <Typography variant="l" component="h1">
        NINO
      </Typography>

      <Button>Continue</Button>

    </TwoThirdsLayout>
  )
}
