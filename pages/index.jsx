import { Button, SummaryList, SummaryListItem, SummaryListKey, SummaryListValue, Typography } from 'govuk-ui';
import Head from 'next/head';
import { getPageData } from '@/helpers/get-page-data';
import { useTranslation } from 'next-i18next';

// To use SSR (Server Side Rendering) you must export a function called getServerSideProps from a page.
// Read more: https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
export const getServerSideProps = async (context) => await getPageData(context);

export default function Index({}) {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{ `${ t('home:pageTitle') } - ${ t('common:govuk') }` }</title>
      </Head>

      <Typography variant="l" component="h1">
        GOVUK-UI example project
      </Typography>

      <Typography>Paragraph about this being a Next project</Typography>

      <Typography variant='m'>
        Example journey
      </Typography>

      <Typography>
        Use this example journey to kick-start the development of your own GOVUK service.
        <br/>
        This simple journey consists of the following pages.
      </Typography>

      <SummaryList>
        <SummaryListItem>
          <SummaryListKey>Full name page</SummaryListKey>
          <SummaryListValue>
            <Typography>Uses multiple <b>TextInput</b> components to capture a users full name</Typography>
            <Typography>One field uses the <b>HintText</b> component and is optional</Typography>
            <Typography>Field level validation</Typography>
          </SummaryListValue>
        </SummaryListItem>
        <SummaryListItem>
          <SummaryListKey>Date of birth page</SummaryListKey>
          <SummaryListValue>
            <Typography>Uses the <b>DateInput</b> component to capture the users date of birth</Typography>
            <Typography>Field level validation</Typography>
          </SummaryListValue>
        </SummaryListItem>
        <SummaryListItem>
          <SummaryListKey>Where do you live page</SummaryListKey>
          <SummaryListValue>
            <Typography>Uses the <b>Radios</b> component to display options to the user</Typography>
            <Typography>Field level validation</Typography>
          </SummaryListValue>
        </SummaryListItem>
        <SummaryListItem>
          <SummaryListKey>Where do you live other page</SummaryListKey>
          <SummaryListValue>
            <Typography>This page will only appear in the journey if the user selects the answer 'other' from the 'where do you live' page</Typography>
            <Typography>Uses a <b>TextInput</b> component</Typography>
            <Typography>Field level validation</Typography>
          </SummaryListValue>
        </SummaryListItem>
        <SummaryListItem>
          <SummaryListKey>Contact preferences page</SummaryListKey>
          <SummaryListValue>
            <Typography>Uses the <b>Checkboxes</b> component</Typography>
            <Typography>One option has a conditional reveal to unfold an additional <b>TextInput</b> component</Typography>
            <Typography>One option has exclusive behaviour, to deselect all other options when selected</Typography>
            <Typography>Field level validation</Typography>
          </SummaryListValue>
        </SummaryListItem>
        <SummaryListItem>
          <SummaryListKey>Check your answers page</SummaryListKey>
          <SummaryListValue>
            <Typography>Uses the <b>SummaryList</b> component to show the users answers before submission</Typography>
            <Typography>Each answer has a <b>Change</b> link to allow the user to change an answer and quickly jump back to the check your ansers page</Typography>
          </SummaryListValue>
        </SummaryListItem>
        <SummaryListItem>
          <SummaryListKey>Application submitted page</SummaryListKey>
          <SummaryListValue>
            <Typography>Uses the <b>Panel</b> component to show the users that the application is complete and provides them with a reference number</Typography>
            <Typography>Each answer has a <b>Change</b> link to allow the user to change an answer and quickly jump back to the check your ansers page</Typography>
          </SummaryListValue>
        </SummaryListItem>
      </SummaryList>

      <Typography variant='m'>
        Routing
      </Typography>
      <Typography>
        A paragraph to explain how the routing works
      </Typography>

      <Typography variant='m'>
        Validation
      </Typography>
      <Typography>A paragraph to explain how the validation works</Typography>

      <Typography variant='m'>
        Creating a new page
      </Typography>
      <Typography>A paragraph to explain how the validation works</Typography>

      <Button isStartButton href='/example/full-name'>
        Start
      </Button>

    </>
  )
}
