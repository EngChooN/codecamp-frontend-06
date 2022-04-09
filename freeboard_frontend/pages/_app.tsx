import "antd/dist/antd.css";
import "../styles/globals.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";

import { initializeApp } from "firebase/app";
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
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
