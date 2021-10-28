import Navbar from "./navbar";
import Footer from "./footer";
import { Box } from "@chakra-ui/layout";

function Layout({ children }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <Box pt="150px">{children}</Box>
      <Footer />
    </div>
  );
}

export default Layout;
