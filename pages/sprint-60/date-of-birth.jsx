import {
  Label,
  Button,
  BackLink,
  Input,
  Typography, DateInput, Legend
} from 'govuk-ui';
import Head from 'next/head';
import { getPageData } from '@/helpers/get-page-data';
import { renderErrorSummary } from '@/helpers/render-error-summary';

export const getServerSideProps = async (context) => await getPageData(context);

export default function FullName({ pageId, data, validation }) {
  return (
    <form action={`/api/form-handler?pageId=${pageId}`} method="post">
      <Head>
        <title>What is your date of birth? - Attendance Allowance Prototype - GOV.UK</title>
      </Head>

      <BackLink href='/' />

      {validation && renderErrorSummary(validation)}

      <DateInput name='dateOfBirth'>
        <Legend isPageHeading classes="govuk-fieldset__legend--l">
          What is your date of birth?
        </Legend>
      </DateInput>

      <Button>Continue</Button>
    </form>
  )
}
