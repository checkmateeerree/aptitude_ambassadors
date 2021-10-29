import {
  Flex,
  Wrap,
  WrapItem,
  Text,
  Center,
  Stack,
  Heading,
  Grid,
  Box,
} from "@chakra-ui/layout";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  Button,
  FormHelperText,
} from "@chakra-ui/react";
import {Fade} from "@chakra-ui/react";
import Link from "next/link"



export default function Login() {
  return (
    <Flex justify="center" pb="60px" >
        <Fade in>
          <Box width="450px" shadow="2xl" rounded="1rem" p="50px 40px">
          <Stack spacing="30px" >
            <Heading size="md" mx="auto">Login to your Account</Heading>
            <FormControl id="email">
              <FormLabel>
                Email
              </FormLabel>
              <Input type="email" placeholder="Your Email" required/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>
                Password
              </FormLabel>
              <Input type="password" placeholder="Your Password" required/>
            </FormControl>
            <Button colorScheme="blue">Log In</Button>
          </Stack>
          <Stack spacing="8px" mt="14px">
          <Center>
                <Text color="teal"> 
                  <Link href="/forgotpassword">
                    Forgot account?
                  </Link>
                </Text>
          </Center>
          <Center>
            <Text fontSize="12px" color="grey">
           ------------------------------------ or ------------------------------------
            </Text>
          </Center>
          <Center pt="1.5">
            <Link href="/register">
              <Button colorScheme="green" width="450px">
                 Create New Account
              </Button>
            </Link>
          </Center>
          </Stack>
          </Box>
        </Fade>
    </Flex>
  );
}