import { useState } from "react";
import axios from 'axios'

import {
  Flex,
  Wrap,
  WrapItem,
  Text,
  Stack,
  Heading,
  Box,
  Center
} from "@chakra-ui/layout";
import {
  FormControl,
  Input,
  Textarea,
  FormErrorMessage,
  Button,
  FormHelperText,
  IconButton,
  useToast
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon} from "@chakra-ui/icons";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Fade } from "@chakra-ui/react";

export default function ContactUs() {
  const toast = useToast()

  const createToast = (title, description, status) => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 5000,
      isClosable: true
    })
  }

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !name || !message){
      createToast("Contact Form Failed", "Please fill out all of the required fields", "error")
    }
    else if (!emailValidation.test(String(email).toLowerCase())) {
      createToast("Contact Form Failed", "The email entered is invalid", "error")
    }
    try {
      
      createToast("Message Sent!", "Your message has successfully sended", "success")
    }
    catch (error) {
      console.log(error);
      createToast("Contact Form Failed", "Something went wrong, try again later.", "error")
      return
    }

  }

  return (
    <Stack>
    <Flex justify="center" pb="60px">
      <Box width={{lg: "850px"}} shadow="2xl" rounded="1rem" p="40px 50px">
      <Wrap
        direction={{ base: "column", md: "row", lg: "row" }}
        spacing={{ base: "30px", md: "150px", lg: "200px" }}
      >
      
        <WrapItem>
          <Fade in>
            <Stack spacing="30px">
              <Heading size="md">Leave us a Message</Heading>
              <FormControl id="name">
                <Input width="300px" type="name" placeholder="Your Name" onChange={handleNameChange} required/>
              </FormControl>
              <FormControl id="email">
                <Input type="email" placeholder="Your Email" onChange={handleEmailChange} required/>
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
              <FormControl id="message">
                <Textarea placeholder="Your Message" onChange={handleMessageChange} required/>
              </FormControl>
              <Button colorScheme="teal" onClick={handleSubmit}>Send Message</Button>
            </Stack>
          </Fade>
        </WrapItem>
        <WrapItem>
          <Stack
            display={{ base: "none", md: "initial" }}
            m="auto"
            spacing="20px"
            justify="center"
          >
            <Text>Based in New Jersey</Text>
            <Text>
              <PhoneIcon mr="10px" /> 123-456-7890
            </Text>
            <Text>
              <EmailIcon mr="10px" />
              aptitude@email.com
            </Text>
            <Wrap spacing="20px">
              <IconButton aria-label="Twitter Icon" icon={<FaTwitter />} />
              <IconButton aria-label="Youtube Icon" icon={<FaYoutube />} />
              <IconButton aria-label="Instagram Icon" icon={<FaInstagram />} />
            </Wrap>
          </Stack>
        </WrapItem>
      </Wrap>
      </Box>
    </Flex>
    </Stack>
  );
}
