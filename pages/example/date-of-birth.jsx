import { Hint, DateInput, Legend } from 'govuk-ui';
import Head from 'next/head';
import { getPageData } from '@/helpers/get-page-data';
import { TwoThirdsLayout } from '@/layouts/TwoThirdsLayout';

export const getServerSideProps = async (context) => await getPageData(context);

export default function DateOfBirth({ pageId, data, errors }) {
  console.log(data);
  return (
    <TwoThirdsLayout pageId={pageId} data={data} errors={errors}>
      <Head>
        <title>Date of birth</title>
      </Head>

      <DateInput name="dateOfBirth" value={data} errorMessage={errors?.dateOfBirth?.inline}>
        <Legend isPageHeading classes="govuk-fieldset__legend--l">
          What is your date of birth?
        </Legend>
        <Hint>
          For example, 27 3 1990
        </Hint>
      </DateInput>

    </TwoThirdsLayout>
  )
}
