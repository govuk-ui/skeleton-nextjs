import { Typography } from 'govuk-ui';
import Head from 'next/head';
import { Button } from 'govuk-ui';

export async function getServerSideProps(context) {
  return {
    props: {
      pageId: context.resolvedUrl
    }
  }
}

export default function Start({ pageId }) {
  return (
    <form action={`/api/form-handler?pageId=${pageId}`} method="post">
      <Head>
        <title>Full name</title>
      </Head>
      <Typography variant="l" component="h1">
        Full name
      </Typography>
      <Button>Continue</Button>
    </form>
  )
}
