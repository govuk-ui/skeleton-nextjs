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
