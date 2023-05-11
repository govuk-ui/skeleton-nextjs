import { BackLink, Button, Input, Label, Legend, RadioItem, Radios } from 'govuk-ui';
import { renderErrorSummary } from '@/helpers/render-error-summary';
import { getPageData } from '@/helpers/get-page-data-app';
import { urls } from '@/lib/urls';
import TwoThirdsLayout from '@/components/TwoThirdsLayout';

export default async function Start() {
  const { data, validation } = await getPageData(urls.start);

  console.log('data', data);

  return (
    <TwoThirdsLayout>

      { validation && renderErrorSummary(validation) }

      <Radios name="whereDoYouLive" value={data?.whereDoYouLive} errorMessage={validation?.whereDoYouLive?.inline}>
        <Legend isPageHeading classes="govuk-fieldset__legend--l">
          Where do you live?
        </Legend>
        <RadioItem value="united-kingdom">
          <Label>United Kingdom</Label>
        </RadioItem>
        <RadioItem value="somewhere-else">
          <Label>Somewhere else</Label>
        </RadioItem>
      </Radios>

      <Button>Continue</Button>
    </TwoThirdsLayout>
  )
}
