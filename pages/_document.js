import { Html, Head, Main, NextScript } from 'next/document'
import { Container, Footer, Header, MainWrapper } from 'govuk-ui';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en" className="govuk-template">
      <Head />
      <body className="govuk-template__body">
        <Header serviceName="Example Service Name" serviceUrl='/'/>
        <Container width>
          <MainWrapper>
            <Main />
          </MainWrapper>
        </Container>
        <Footer />
        <NextScript />
        <Script src="/govuk.js" strategy="beforeInteractive" />
      </body>
    </Html>
  )
}
