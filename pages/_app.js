import Script from 'next/script';
import { appWithTranslation } from 'next-i18next';
import '@/styles/govuk.sass';

function App({ Component, pageProps }) {
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

export default appWithTranslation(App);
