import { Typography } from 'govuk-ui';
import Head from 'next/head';
import { getPageData } from '@/helpers/get-page-data';
import { useTranslation } from 'next-i18next';
import { SummaryCard } from '@/components/SummaryCard';

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
        Welcome to the govuk-ui React example project!
      </Typography>

      <SummaryCard title="Example journey" href="/example/start" description={
        "This is an example journey that uses the govuk-ui React components, and a config driven approach to form handling."
      } />
    </>
  )
}
