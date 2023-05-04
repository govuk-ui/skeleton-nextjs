import {
  Label,
  Button,
  BackLink,
  Input,
  Typography
} from 'govuk-ui';
import Head from 'next/head';
import { getPageData } from '@/helpers/get-page-data';
import { renderErrorSummary } from '@/helpers/render-error-summary';

export const getServerSideProps = async (context) => await getPageData(context);

export default function FullName({ pageId, data, validation }) {
  return (
    <form action={`/api/form-handler?pageId=${pageId}`} method="post">
      <Head>
        <title>What is your full name? - Attendance Allowance Prototype - GOV.UK</title>
      </Head>

      <BackLink href='/' />

      {validation && renderErrorSummary(validation)}

      <Typography variant='l' >What is your full name?</Typography>

      <Input
        classes="govuk-!-width-three-quarters"
        name="firstName"
        value={data?.firstName}
        errorMessage={validation?.firstName?.inline}
      >
        <Label>
          First name
        </Label>
      </Input>
      <Input
        classes="govuk-!-width-three-quarters"
        name="middleName"
        value={data?.middleName}
        errorMessage={validation?.middleName?.inline}
      >
        <Label>
          Middle name (optional)
        </Label>
      </Input>
      <Input
        classes="govuk-!-width-three-quarters"
        name="lastName"
        value={data?.lastName}
        errorMessage={validation?.lastName?.inline}
      >
        <Label>
          Last name
        </Label>
      </Input>

      <Button>Continue</Button>
    </form>
  )
}
