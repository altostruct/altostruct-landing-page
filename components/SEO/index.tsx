import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
}

function SEO(props: SEOProps) {
  const { title, description } = props;
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description}></meta>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}

export default SEO;
