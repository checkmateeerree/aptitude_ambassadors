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
import axios from 'axios'
import { useToast } from "@chakra-ui/toast";
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import {useEffect, useState} from 'react'


export default function Register() {
  const toast = useToast();

  const createToast = (title, description, status) => {
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
    try {
      const res = await axios.post('/api/auth/register', {
        email: email,
        password: password,
      }
    );
      createToast("Registration succeeded!", "Your account has been created", "success")
      router.replace("/login");
    }
    catch (error) {
      console.log(error)
      if (error.response.status === 422){
        createToast("Registration failed.", "The email address you entered already exists.", "error");
      }
      else if (error.response.status === 423){
        createToast("Registration failed.", "Please enter all of the required fields", "error")
      }
      else if (error.response.status === 500){
        createToast("Registration failed.", "Please try again later", "error")
      }
    }
  }
  const [loading, setLoading] = useState(true);
  const router = useRouter();
    useEffect(() => {
        getSession().then((session) => {
            if (session) {
                router.replace('/');
            } else {
                setLoading(false);
            }
        });
    }, []);
    if (loading) {
        return <p>Loading...</p>;
    }
  return (
    <Flex justify="center" pb="60px" >
        <Fade in>
          <Box width="450px" shadow="2xl" rounded="1rem" p="50px 40px">
          <Stack spacing="30px" >
            <Heading size="md" mx="auto">Create a New Account</Heading>
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
            <Button colorScheme="blue" onClick={handleSubmit}>Create New Account</Button>
          </Stack>
          <Stack spacing="8px" mt="14px">
          <Center>
            <Text fontSize="12px" color="grey">
           ------------------------------------ or ------------------------------------
            </Text>
          </Center>
          <Center pt="1.5">
            <Link href="/login">
              <Button colorScheme="green" width="450px">
                 Log In
              </Button>
            </Link>
          </Center>
          </Stack>
          </Box>
        </Fade>
    </Flex>
  );
}