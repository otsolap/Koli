import Head from 'next/head'
import Script from 'next/script'

const Meta = ({ meta }) => (
    <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={meta.titleTemplate} />
        <meta name="og:description" property="og:description" content={meta.description} />
        <meta property="og:site_name" content="Juho Koli" />
        <meta property="og:url" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:site" content={meta.twitter} />
        <meta name="twitter:creator" content={meta.twitter} />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="canonical" href={meta.url} />
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
    </Head>
)
export default Meta