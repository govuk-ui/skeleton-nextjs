import { Typography } from 'govuk-ui';
import Head from 'next/head';
export async function getServerSideProps(context) {
  return {
    props: {
    }
  }
}

export default function Index({}) {
  return (
    <>
      <Head>
        <title>Example Service Name - GOV.UK</title>
      </Head>
      <Typography variant="l" component="h1">
        Example Service Name
      </Typography>
    </>
  )
}
