import Head from 'next/head'
const Meta = (props) => (
    <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={props.titleTemplate} />
        <meta name="og:description" property="og:description" content={props.description} />
        <meta property="og:site_name" content="Juho Koli" />
        <meta property="og:url" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:site" content="@juho_koli" />
        <meta name="twitter:creator" content="@juho_koli" />
        <link rel="icon" type="image/png" href="/public/favicon.ico" />
        <link rel="apple-touch-icon" href="/public/favicon.ico" />
        <meta property="og:image" content={props.image} />
        <meta name="twitter:image" content={props.image} />
        <link rel="canonical" href={props.url} />
    </Head>
)
export default Meta