import { Container, Footer, Header, MainWrapper } from 'govuk-ui';
import Script from 'next/script';
import '@/styles/govuk.sass';

export const dynamic = 'force-dynamic';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="govuk-template">
    <body className="govuk-template__body">
      <Script id="gov-js-enabled">
        {`document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled')`}
      </Script>
      <Header serviceName="Example Service Name" serviceUrl="/"/>
      <Container width>
        <MainWrapper>
          { children }
        </MainWrapper>
      </Container>
      <Footer/>
      <Script src="/govuk.js" strategy="beforeInteractive" />
      <Script id="govuk-init">
        {`window?.GOVUKFrontend?.initAll()`}
      </Script>
    </body>
    </html>
  );
}
