import { Label, Legend, Radios, RadioItem } from 'govuk-ui';
import Head from 'next/head';
import { getPageData } from '@/helpers/get-page-data';
import { TwoThirdsLayout } from '@/layouts/TwoThirdsLayout';

export const getServerSideProps = async (context) => await getPageData(context);

export default function WhereDoYouLive({ pageId, data, errors }) {
  return (
    <TwoThirdsLayout pageId={pageId} data={data} errors={errors}>
      <Head>
        <title>Where do you live</title>
      </Head>
      
      <Radios name="whereDoYouLive" value={ data?.whereDoYouLive}>
        <Legend
          classes="govuk-fieldset__legend--l"
          isPageHeading
        >
          Where do you live?
        </Legend>
        <RadioItem value="england">
          <Label>
            England
          </Label>
        </RadioItem>
        <RadioItem value="scotland">
          <Label>
            Scotland
          </Label>
        </RadioItem>
        <RadioItem value="wales">
          <Label>
            Wales
          </Label>
        </RadioItem>
        <RadioItem value="northernIreland">
          <Label>
            Northern Ireland
          </Label>
        </RadioItem>
        <RadioItem value="other">
          <Label>
            Somewhere Else
          </Label>
        </RadioItem>
      </Radios>
    </TwoThirdsLayout>
  )
}
