import { Label, Button, Input, Radios, Legend, RadioItem } from 'govuk-ui';
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

      <Input name="fullName" value={data?.fullName} errorMessage={errors?.fullName?.inline}>
        <Label>What is your first name?</Label>
      </Input>

      <Input name="lastName" value={data?.lastName} errorMessage={errors?.lastName?.inline}>
        <Label>What is your last name?</Label>
      </Input>

      <Radios name="radios-example" value={data?.['radios-example']} errorMessage={errors?.['radios-example']?.inline}>
        <Legend>
          Select an option
        </Legend>
        <RadioItem value="one">
          <Label>Option 1</Label>
        </RadioItem>
        <RadioItem value="two">
          <Label>Option 2</Label>
        </RadioItem>
        <RadioItem value="three">
          <Label>Option 3</Label>
        </RadioItem>
      </Radios>

      <Button>Continue</Button>

    </TwoThirdsLayout>
  )
}
