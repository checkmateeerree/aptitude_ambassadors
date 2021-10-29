import { ChakraProvider, ScaleFade, SlideFade } from "@chakra-ui/react";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.css";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <AnimateSharedLayout>
        <Layout>
            <ScaleFade in="true" key={router.route}>
              <Component {...pageProps} />
            </ScaleFade>
        </Layout>
      </AnimateSharedLayout>
    </ChakraProvider>
  );
}

export default MyApp;
