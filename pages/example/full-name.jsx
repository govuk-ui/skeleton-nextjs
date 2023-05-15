import { Label, Input, Typography, Hint } from 'govuk-ui';
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

      <Typography component="h1" variant="l">
        What is your full name?
      </Typography>

      <Input name="firstName" value={data?.firstName} errorMessage={errors?.firstName?.inline}>
        <Label>First name</Label>
      </Input>

      <Input name="middleNames" value={data?.middleNames} errorMessage={errors?.middleNames?.inline}>
        <Label>Middle names</Label>
        <Hint>Leave this empty if you don&apos;t have any</Hint>
      </Input>

      <Input name="lastName" value={data?.lastName} errorMessage={errors?.lastName?.inline}>
        <Label>Last name</Label>
      </Input>
    </TwoThirdsLayout>
  )
}
