import { Panel, Typography } from 'govuk-ui';
import Head from 'next/head';
import { TwoThirdsLayout } from '@/layouts/TwoThirdsLayout';
import React from 'react';
import { getPageData } from '@/helpers/get-page-data';
import Link from 'next/link';

export const getServerSideProps = async (context) => await getPageData(context);

export default function ApplicationSubmitted() {
  return (
    <TwoThirdsLayout hideContinueButton hideBackLink>
      <Head>
        <title>Application submitted</title>
      </Head>

      <Panel>
        <Typography variant="xl" classes="govuk-panel__title">
          Application complete
        </Typography>
        <Typography classes="govuk-panel__body">
          Your reference number
          <br/>
          <strong>HDJ2123F</strong>
        </Typography>
      </Panel>

      <Typography>
        We have sent you a confirmation email.
      </Typography>

      <Typography variant="m" component="h2">
        What happens next
      </Typography>
      <Typography>
        We will check your application and contact you if we need more information.
      </Typography>
      <Typography>
        <Link href="#" className="govuk-link">What did you think of this service?</Link> (takes 30 seconds)
      </Typography>

    </TwoThirdsLayout>
  )
}
