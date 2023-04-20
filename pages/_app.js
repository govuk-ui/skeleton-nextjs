import '@/styles/govuk.sass';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script id="gov-js-enabled">
        {`document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled')`}
      </Script>
      <Component {...pageProps} />
      <Script id="govuk-init">
        {`window?.GOVUKFrontend?.initAll()`}
      </Script>
    </>
  )
}
