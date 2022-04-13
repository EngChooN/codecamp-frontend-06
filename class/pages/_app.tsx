import "antd/dist/antd.css";
// import "../styles/globals.css";

import { AppProps } from "next/app";
// import Layout from "antd/lib/layout/layout";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/layout/apollo";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBePjRlksM8EFlzboIdJtUhKDBcO9cDFTw",
  authDomain: "mysite9303.firebaseapp.com",
  projectId: "mysite9303",
  storageBucket: "mysite9303.appspot.com",
  messagingSenderId: "107964921466",
  appId: "1:107964921466:web:46c63606254cbe36f5edc3",
  measurementId: "G-1JE4DH3B6F",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

// 이미지 업로드 세팅
function MyApp({ Component, pageProps }: AppProps) {
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
