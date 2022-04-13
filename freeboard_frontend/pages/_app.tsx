import "antd/dist/antd.css";
import "../styles/globals.css";

import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

import { initializeApp } from "firebase/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/layout/apollo";

const firebaseConfig = {
  apiKey: "AIzaSyBePjRlksM8EFlzboIdJtUhKDBcO9cDFTw",
  authDomain: "mysite9303.firebaseapp.com",
  projectId: "mysite9303",
  storageBucket: "mysite9303.appspot.com",
  messagingSenderId: "107964921466",
  appId: "1:107964921466:web:46c63606254cbe36f5edc3",
  measurementId: "G-1JE4DH3B6F",
};
export const firebaseApp = initializeApp(firebaseConfig);

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
