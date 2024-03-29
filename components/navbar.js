import React from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { signOut, useSession } from 'next-auth/client';
import { Box, Flex, Text, Button, Heading, Menu, Center, MenuButton, MenuList, MenuItem} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon} from '@chakra-ui/icons'
import { useColorModeValue } from "@chakra-ui/react";

const MenuIt = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 8, md: 0 }}
      mr={{ base: 0, md: isLast ? 0 : 12 }}
      display="block"
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};

const CloseIcon = ({fillColor}) => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill={fillColor}
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = ({fillColor}) => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill={fillColor}
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

export default function Navbar() {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);
  const [session, loading] = useSession()
  const {colorMode, toggleColorMode} = useColorMode()
  const bg = useColorModeValue("white", "black")

  return (
    <Flex
      as="nav"
      align="center"
      position="fixed"
      justify="space-between"
      wrap="wrap"
      w="100%"
      zIndex="1000"
      mb={8}
      p={8}
      shadow="base"
      bg={bg}
      //color={["black", "black", "primary.700", "primary.700"]}
    >
      <Flex align="center">
        <Heading size="md">
          <Link href="/">Aptitude Amplifiers</Link>
        </Heading>
      </Flex>

      <Box display={{ base: "block", lg: "none" }} onClick={toggleMenu} color="white">
        {show ? <CloseIcon fillColor={colorMode==="light"? "black": "white"}/> : <MenuIcon fillColor={colorMode==="light"? "black": "white"}/>}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", lg: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "center", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuIt to="/">Home</MenuIt>
          <MenuIt to="/about">About</MenuIt>
          <MenuIt to="/contact">Contact Us</MenuIt>
          <Flex mb={{ base: 8, sm: 8, md: 0 }}
            mr={{ base: 0, md: 12 }}>
            <Menu>
              <MenuButton>
                Resources <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <Link href="/resources/programs">
                  <MenuItem>
                    Programs
                  </MenuItem>
                </Link>
                <Link href="/resources/essays">
                  <MenuItem>Sample Essays</MenuItem>
                </Link>
                {
                  session && 
                  (
                  <Link href="/resources/essayguide">
                    <MenuItem>Application Essay Writing Guide</MenuItem>
                  </Link>
                  )
                }
              </MenuList>
            </Menu>
          </Flex>
          {
            session && (
              <Button
                size="sm"
                rounded="md"
                colorScheme="blue"
                variant="outline"
                onClick={signOut}
              >
                Logout
              </Button>
            )
          }
          {!session && !loading && (
            <>
            <MenuIt to="/login">Log in</MenuIt>
            <MenuIt to="/register" isLast>
              <Button
                size="sm"
                rounded="md"
                colorScheme="blue"
                variant="outline"
              >
                Create Account
              </Button>
            </MenuIt>
            </>
            )
          }
         
          <Button onClick={toggleColorMode} marginX={5}>
            {colorMode === 'light' ? <MoonIcon/>: <SunIcon />}
          </Button>
       
          
        </Flex>
        
      </Box>
    </Flex>
  );
}
