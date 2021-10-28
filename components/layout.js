import Navbar from "./navbar";
import Footer from "./footer";
import { Box } from "@chakra-ui/layout";
import { SlideFade } from "@chakra-ui/react";

function Layout({ children }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <SlideFade in="true">
        <Box pt="150px">{children}</Box>
      </SlideFade>

      <Footer />
    </div>
  );
}

export default Layout;
