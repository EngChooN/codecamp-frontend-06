import "antd/dist/antd.css";
import "../styles/globals.css";

import Layout from "../src/components/layout/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/globalStyles";

import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/layout/apollo";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
