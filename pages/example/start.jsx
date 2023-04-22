import { Label, Legend, RadioItem, Radios, Button, BackLink } from 'govuk-ui';
import Head from 'next/head';
import { getPageData } from '@/helpers/get-page-data';
import { renderErrorSummary } from '@/helpers/render-error-summary';

export const getServerSideProps = async (context) => await getPageData(context);

export default function Start({ pageId, data, validation }) {
  return (
    <form action={`/api/form-handler?pageId=${pageId}`} method="post">
      <Head>
        <title>Start page</title>
      </Head>
      <BackLink href='/'/>
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
    </form>
  )
}
