import React, {useState} from 'react'
import {useToast} from '@chakra-ui/react'
import {getSession} from 'next-auth/client'
import {
    Stack,
    Flex,
    Box, 
    Wrap,
    WrapItem,
    Heading,
    Text
}
from '@chakra-ui/layout'
import {
    Fade,
    FormControl,
    Input,
    FormHelperText,
    Textarea,
    Button
} from '@chakra-ui/react'
import axios from 'axios'

const addprogram = () => {
    
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
  const [link, setLink] = useState();
  const [image, setImage] = useState();
  const [type, setType] = useState();

  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handleLinkChange = (event) => {
    setLink(event.target.value);
  }
  const handleImageChange = (event) => {
    setImage(event.target.value);
  }
  const handleTypeChange = (event) => {
    setType(event.target.value);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!link || !name || !type || !image){
      createToast("Adding Summer Program Failed", "Please fill out all of the required fields", "error")
    }

    try {
      const res = await axios.post("/api/programs/addprogram", {name, link, image, type})
      createToast("Program Added!", "Your Program has successfully sended", "success")
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
              <Heading size="md">Enter new Summer Program</Heading>
              <FormControl id="name">
                <Input width="300px" type="String" placeholder="Your Name" onChange={handleNameChange} required/>
              </FormControl>
              <FormControl id="Link">
                <Input type="String" placeholder="Your Link" onChange={handleLinkChange} required/>
              </FormControl>
              <FormControl id="type">
                <Input type="String" placeholder="Program Type" onChange={handleTypeChange} required/>
              </FormControl>
              <FormControl id="Image">
                <Textarea placeholder="Your Image" onChange={handleImageChange} required/>
              </FormControl>
              <Button colorScheme="teal" onClick={handleSubmit}>Create Program</Button>
            </Stack>
          </Fade>
        </WrapItem>
      </Wrap>
      </Box>
    </Flex>
    </Stack>
  );
}

export default addprogram

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });
    if (!session || !session.user.isAdmin) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    } 
    return {
        props: { session },
    };
}