import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="PEREGRINO" />
        <meta name="description" content="FIND A GREAT PLACE, WE'LL DO THE REST." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peregrinocompany.com/" />
        <meta property="og:title" content="PEREGRINO" />
        <meta property="og:description" content="FIND A GREAT PLACE, WE'LL DO THE REST." />
        <meta property="og:image" content="/meta-img.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://peregrinocompany.com/" />
        <meta property="twitter:title" content="PEREGRINO" />
        <meta property="twitter:description" content="FIND A GREAT PLACE, WE'LL DO THE REST." />
        <meta property="twitter:image" content="/meta-img.jpg" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* Google Ads Pixel */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17468723893"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17468723893');
            `,
          }}
        />

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '839797801765515');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=839797801765515&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
