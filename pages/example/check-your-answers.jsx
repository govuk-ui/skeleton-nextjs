import {
  Button,
  SummaryList,
  SummaryListActions,
  SummaryListItem,
  SummaryListKey,
  SummaryListRow,
  SummaryListValue,
  Typography
} from 'govuk-ui';
import Head from 'next/head';
import { TwoThirdsLayout } from '@/layouts/TwoThirdsLayout';
import { getFormData } from '@/lib/session';
import React from 'react';
import { urls } from '@/lib/urls';
import Link from 'next/link';
import { DateTime } from 'luxon';

export const getServerSideProps = async (context) => {
  const cookies = context.req.cookies;
  const sessionId = cookies[process.env.SESSION_COOKIE_NAME];
  const data = await getFormData(sessionId);
  return {
    props: {
      data
    }
  }
}

export default function CheckYourAnswers({ data }) {
  const fullNamePageData = data[urls.fullName];
  const { 'dateOfBirth-day': day, 'dateOfBirth-month': month, 'dateOfBirth-year': year } = data[urls.dateOfBirth];
  const dateOfBirth = DateTime.fromFormat(`${day}-${month}-${year}`, 'd-m-yyyy').toFormat('d MMMM yyyy');

  return (
    <TwoThirdsLayout hideContinueButton>
      <Head>
        <title>Check your answers before sending your application</title>
      </Head>

      <Typography component="h1" variant="l">
        Check your answers before sending your application
      </Typography>

      <SummaryList id="your-details">
        <SummaryListItem>
          <SummaryListKey>Full name</SummaryListKey>
          <SummaryListValue>
            { `${fullNamePageData.firstName} ${fullNamePageData.middleNames} ${fullNamePageData.lastName}` }
          </SummaryListValue>
          <SummaryListActions>
            <Link href={`${urls.fullName}#fullName`} className="govuk-link govuk-link--no-visited-state">Change</Link>
          </SummaryListActions>
        </SummaryListItem>

        <SummaryListItem>
          <SummaryListKey>Date of birth</SummaryListKey>
          <SummaryListValue>{ dateOfBirth }</SummaryListValue>
          <SummaryListActions>
            <Link href={`${urls.dateOfBirth}#dateOfBirth-day`} className="govuk-link govuk-link--no-visited-state">Change</Link>
          </SummaryListActions>
        </SummaryListItem>
      </SummaryList>

      <Typography variant="m" component="h2">
        Now send your application
      </Typography>
      <Typography>
        By submitting this application you are confirming that, to the best of your knowledge, the details you are providing are correct.
      </Typography>

      <Link href={urls.applicationSubmitted}>
        <Button>
          Accept and send
        </Button>
      </Link>

    </TwoThirdsLayout>
  )
}
