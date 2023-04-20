import { Button, Typography } from 'govuk-ui';
import Head from 'next/head';
import Link from 'next/link';

// To use SSR (Server Side Rendering) you must export a function called getServerSideProps from a page.
// Read more: https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
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
      <Link href={'/example/start'}>
        <Button isStartButton>
          Start
        </Button>
      </Link>
    </>
  )
}
