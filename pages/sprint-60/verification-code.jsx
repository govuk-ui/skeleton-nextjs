import {
  Label,
  Button,
  BackLink,
  Input
} from 'govuk-ui';
import Head from 'next/head';
import { getPageData } from '@/helpers/get-page-data';
import { renderErrorSummary } from '@/helpers/render-error-summary';

export const getServerSideProps = async (context) => await getPageData(context);

export default function VerificationCode({ pageId, data, validation }) {
  return (
    <form action={`/api/form-handler?pageId=${pageId}`} method="post">
      <Head>
        <title>Verification code - Attendance Allowance Prototype - GOV.UK</title>
      </Head>

      <BackLink href='/' />

      {validation && renderErrorSummary(validation)}

      <Input
        name="verificationCode"
        classes="govuk-input--width-5"
        value={data?.verificationCode}
        errorMessage={validation?.verificationCode?.inline}
      >
        <Label isPageHeading classes="govuk-label--l">
          What is your verification code?
        </Label>
      </Input>

      <Button>Continue</Button>
    </form>
  )
}
