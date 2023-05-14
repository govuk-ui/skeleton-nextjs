import { Label, Legend, RadioItem, Radios, Button, BackLink } from 'govuk-ui';
import Head from 'next/head';
import { getPageData } from '@/helpers/get-page-data';
import { TwoThirdsLayout } from '@/layouts/TwoThirdsLayout';

export const getServerSideProps = async (context) => await getPageData(context);

export default function Start({ pageId, data, errors }) {
  return (
    <TwoThirdsLayout pageId={pageId} data={data} errors={errors}>
      <Head>
        <title>Start page</title>
      </Head>

      <Radios name="whereDoYouLive" value={data?.whereDoYouLive} errorMessage={errors?.whereDoYouLive?.inline}>
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
