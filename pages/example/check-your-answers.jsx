import {
  Button,
  SummaryList,
  SummaryListActions,
  SummaryListItem,
  SummaryListKey,
  SummaryListValue,
  Typography
} from 'govuk-ui';
import Head from 'next/head';
import { TwoThirdsLayout } from '@/layouts/TwoThirdsLayout';
import { getFormData } from '@/lib/session';
import React from 'react';
import { urls } from '@/lib/urls';
import { DateTime } from 'luxon';
import Link from 'next/link';

export const getServerSideProps = async (context) => {
  const cookies = context.req.cookies;
  const sessionId = cookies[process.env.SESSION_COOKIE_NAME];
  const data = await getFormData(sessionId) || null;
  return {
    props: {
      data
    }
  }
}

const capitalise = (answer) => {
  if (!answer) {
    return;
  }
  return answer.charAt(0).toUpperCase() + answer.slice(1);
}

export default function CheckYourAnswers({ data }) {
  // Format date of birth into a readable format
  const { 'dateOfBirth-day': day, 'dateOfBirth-month': month, 'dateOfBirth-year': year } = data?.[urls.dateOfBirth] || {};
  const dateOfBirth = DateTime.fromFormat(`${day}-${month}-${year}`, 'd-m-yyyy').toFormat('d MMMM yyyy');

  return (
    <TwoThirdsLayout hideContinueButton>
      <Head>
        <title>Check your answers before sending your application</title>
      </Head>

      <Typography component="h1" variant="l">
        Check your answers before sending your application
      </Typography>

      { data && (
        <SummaryList id="your-details">
          <SummaryListItem>
            <SummaryListKey>Full name</SummaryListKey>
            <SummaryListValue>
              { `${data[urls.fullName].firstName} ${data[urls.fullName].middleNames} ${data[urls.fullName].lastName}` }
            </SummaryListValue>
            <SummaryListActions>
              <a href={`${urls.fullName}#fullName`} className="govuk-link govuk-link--no-visited-state">Change</a>
            </SummaryListActions>
          </SummaryListItem>

          <SummaryListItem>
            <SummaryListKey>Date of birth</SummaryListKey>
            <SummaryListValue>{ dateOfBirth }</SummaryListValue>
            <SummaryListActions>
              <a href={`${urls.dateOfBirth}#dateOfBirth-day`} className="govuk-link govuk-link--no-visited-state">Change</a>
            </SummaryListActions>
          </SummaryListItem>

          <SummaryListItem>
            <SummaryListKey>Where you live</SummaryListKey>
            <SummaryListValue>
              <Typography>{ capitalise(data[urls.whereDoYouLive].whereDoYouLive) }</Typography></SummaryListValue>
            <SummaryListActions>
              <Link href={`${urls.whereDoYouLive}#whereDoYouLive`} className="govuk-link govuk-link--no-visited-state">Change</Link>
            </SummaryListActions>
          </SummaryListItem>

          { data[urls.whereDoYouLiveOther] && (
            <SummaryListItem>
              <SummaryListKey>Where you live other</SummaryListKey>
              <SummaryListValue>
                <Typography>{ capitalise(data[urls.whereDoYouLiveOther].whereDoYouLiveOther) }</Typography></SummaryListValue>
              <SummaryListActions>
                <Link href={`${urls.whereDoYouLiveOther}#whereDoYouLiveOther`} className="govuk-link govuk-link--no-visited-state">Change</Link>
              </SummaryListActions>
            </SummaryListItem>
          )}

          <SummaryListItem>
            <SummaryListKey>Contact preferences</SummaryListKey>
            <SummaryListValue>
              <ul className="govuk-list govuk-list--bullet">
                { data?.[urls.contactPreferences].contactPreferences.map((preference) => <li key={preference}>{ capitalise(preference) }</li>) }
              </ul>
            </SummaryListValue>
            <SummaryListActions>
              <a href={`${urls.contactPreferences}#contactPreferences`} className="govuk-link govuk-link--no-visited-state">Change</a>
            </SummaryListActions>
          </SummaryListItem>

          { data?.[urls.contactPreferences].contactPreferences.includes('email') && (
            <SummaryListItem>
              <SummaryListKey>Email address</SummaryListKey>
              <SummaryListValue>{ data?.[urls.contactPreferences].emailAddress }</SummaryListValue>
              <SummaryListActions>
                <a href={`${urls.contactPreferences}#emailAddress`} className="govuk-link govuk-link--no-visited-state">Change</a>
              </SummaryListActions>
            </SummaryListItem>
          )}

          { data?.[urls.contactPreferences].contactPreferences.includes('phone') && (
            <SummaryListItem>
              <SummaryListKey>Telephone number</SummaryListKey>
              <SummaryListValue>{ data?.[urls.contactPreferences].phoneNumber }</SummaryListValue>
              <SummaryListActions>
                <a href={`${urls.contactPreferences}#phoneNumber`} className="govuk-link govuk-link--no-visited-state">Change</a>
              </SummaryListActions>
            </SummaryListItem>
          )}
        </SummaryList>
      )}

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
