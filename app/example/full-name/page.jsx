import { BackLink, Button, Input, Label } from 'govuk-ui';
import { renderErrorSummary } from '@/helpers/render-error-summary';
import { getPageData } from '@/helpers/get-page-data-app';
import { urls } from '@/lib/urls';
import TwoThirdsLayout from '@/components/TwoThirdsLayout';

export default async function FullName() {
  const { data, validation } = await getPageData(urls.fullName)

  return (
    <TwoThirdsLayout>
      <BackLink href='/'/>

      { validation && renderErrorSummary(validation) }

      <Input name="fullName" value={data?.fullName} errorMessage={validation?.fullName?.inline}>
        <Label isPageHeading classes="govuk-label--l">
          What is your full name?
        </Label>
      </Input>

      <Button>Continue</Button>
    </TwoThirdsLayout>
  )
}
