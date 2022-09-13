import type { AppProps } from 'next/app';
import Layout from '../layout';
import '../look/styles/resources.scss';

const NextApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      {/*@ts-ignore*/}
      <Component {...pageProps} />
    </Layout>
  );
};
export default NextApp;
