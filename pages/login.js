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
  Button,
} from "@chakra-ui/react";
import {Fade} from "@chakra-ui/react";
import Link from "next/link"
import { signIn } from 'next-auth/client';
import {useState} from "react"
import {useToast} from '@chakra-ui/react'

export default function Login() {
  const toast = useToast();

  const createToast = (title, description="", status="success") => {
      toast({
        title: title,
        description: description,
        status: status,
        duration: 5000,
        isClosable: true
      })
  }
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleEmailChange = ({target}) => {
    setEmail(target.value)
  }
  const handlePasswordChange = ({target}) => {
    setPassword(target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const status = await signIn('credentials', {
      redirect: false,
      email: email,
      password: password,
  });
    if (status.error !== null) {
      createToast(
        "Login failed",
        "Email or Password is incorrect",
        "error"
      )
    } else {
      createToast(
        "Login succeeded!",
      )
    }
    console.log(status);
  }
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
              <Input type="email" placeholder="Your Email" required onChange={handleEmailChange}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>
                Password
              </FormLabel>
              <Input type="password" placeholder="Your Password" required onChange={handlePasswordChange}/>
            </FormControl>
            <Button colorScheme="blue" onClick={handleSubmit}>Log In</Button>
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