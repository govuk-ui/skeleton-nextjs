import { Label, Input, Hint, Checkboxes, Legend, CheckboxItem } from 'govuk-ui';
import Head from 'next/head';
import { getPageData } from '@/helpers/get-page-data';
import { TwoThirdsLayout } from '@/layouts/TwoThirdsLayout';

export const getServerSideProps = async (context) => await getPageData(context);

export default function ContactPreferences({ pageId, data, errors }) {
  const emailInput = (
    <Input
      classes="govuk-!-width-one-third"
      name="emailAddress"
      type="email"
      autocomplete="email"
      spellcheck={false}
      value={data?.emailAddress}
      errorMessage={errors?.emailAddress?.inline}
    >
      <Label>Email address</Label>
    </Input>
  );

  const phoneNumberInput = (
    <Input
      classes="govuk-!-width-one-third"
      name="phoneNumber"
      type="tel"
      autocomplete="tel"
      value={data?.phoneNumber}
      errorMessage={errors?.phoneNumber?.inline}
    >
      <Label>Phone number</Label>
    </Input>
  );

  return (
    <TwoThirdsLayout pageId={pageId} data={data} errors={errors}>
      <Head>
        <title>Contact preferences</title>
      </Head>

      <Checkboxes name="contactPreferences" value={data?.contactPreferences} errorMessage={errors?.contactPreferences?.inline}>
        <Legend classes="govuk-fieldset__legend--l" isPageHeading>
          How would you like to be contacted?
        </Legend>
        <Hint>
          Select all options that are relevant to you.
        </Hint>
        <CheckboxItem value="email" conditional={emailInput}>
          <Label>
            Email
          </Label>
        </CheckboxItem>
        <CheckboxItem value="phone" conditional={phoneNumberInput}>
          <Label>
            Phone
          </Label>
        </CheckboxItem>
        <CheckboxItem divider>
          or
        </CheckboxItem>
        <CheckboxItem value="none" exclusive>
          <Label>
            I do not want to be contacted
          </Label>
        </CheckboxItem>
      </Checkboxes>
    </TwoThirdsLayout>
  )
}
