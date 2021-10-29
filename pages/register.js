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



export default function Register() {
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
              <Input type="email" placeholder="Your Email" required/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>
                Password
              </FormLabel>
              <Input type="password" placeholder="Your Password" required/>
            </FormControl>
            <Button colorScheme="blue">Create New Account</Button>
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