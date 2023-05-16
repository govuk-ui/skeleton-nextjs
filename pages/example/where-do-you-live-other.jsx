import { Label, Input } from 'govuk-ui';
import Head from 'next/head';
import { getPageData } from '@/helpers/get-page-data';
import { TwoThirdsLayout } from '@/layouts/TwoThirdsLayout';

export const getServerSideProps = async (context) => await getPageData(context);

export default function WhereDoYouLiveOther({ pageId, data, errors }) {
  return (
    <TwoThirdsLayout pageId={pageId} data={data} errors={errors}>
      <Head>
        <title>Where do you live</title>
      </Head>

      <Input name="whereDoYouLiveOther">
        <Label
          classes="govuk-label--l govuk-input--width-20"
          isPageHeading
        >
          Where do you live?
        </Label>
      </Input>
    </TwoThirdsLayout>
  )
}
