import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.css";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AnimateSharedLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimateSharedLayout>
    </ChakraProvider>
  );
}

export default MyApp;
