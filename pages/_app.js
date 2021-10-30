import { ChakraProvider, ScaleFade, SlideFade } from "@chakra-ui/react";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.css";
import { AnimateSharedLayout } from "framer-motion";
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps, router }) {

  return (
    <Provider session={pageProps.session}>
      <ChakraProvider>
        <AnimateSharedLayout>
          <Layout>
              <ScaleFade in="true" key={router.route}>
                <Component {...pageProps} />
              </ScaleFade>
          </Layout>
        </AnimateSharedLayout>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
