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
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { Select } from "@chakra-ui/react"
import { Checkbox, CheckboxGroup } from "@chakra-ui/react"

export default function Register() {
  
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

  const [name, setName] = useState()
  const [grade, setGrade] = useState()
  const [incomeBracket, setIncomeBracket] = useState()
  const [interests, setInterests] = useState([false, false, false, false, false, false, false, false])
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const allChecked = interests.every(Boolean)
  const isIndeterminate = interests.some(Boolean) && !allChecked

  const handleNameChange = ({target}) => {
    setName(target.value)
  }
  const handleGradeChange = ({target}) => {
    setGrade(target.value)
  }

  const handleIncomeBracketChange = ({target}) => {
    setIncomeBracket(target.value)
  }

  const handleEmailChange = ({target}) => {
    setEmail(target.value)
  }
  const handlePasswordChange = ({target}) => {
    setPassword(target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!name || !grade || !email || !password || !incomeBracket || !interests){
      return createToast("Registration failed.", "Please enter all of the required fields", "error")
    }
    try {
      await axios.post('/api/auth/register', {
        email,
        password,
        grade,
        incomeBracket,
        interests,
        name
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
  const [tabIndex, setTabIndex] = useState(0)
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <Flex justify="center" pb="60px" >
        <Fade in>
          <Box width="450px" shadow="2xl" rounded="1rem" p="50px 40px">
          <Heading size="md" pb="5" mx="auto">Create a New Account</Heading>
          <Tabs index={tabIndex} onChange={(index) => setTabIndex(index)}>
            <TabList>
              <Tab>
                1
              </Tab>
              <Tab>
                2
              </Tab>
              <Tab>
                3
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
              <Stack spacing="30px" >     
                  <FormControl id="name">
                    <FormLabel>
                      Name
                    </FormLabel>
                    <Input type="text" placeholder="Your Name" required onChange={handleNameChange}/>
                  </FormControl>
                  <FormControl id="Grade">
                    <FormLabel>
                      Graduating Year
                    </FormLabel>
                    <Select placeholder="Highschool Graduation Year" onChange={handleGradeChange}>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026+</option>
                    </Select>
                  </FormControl>
                  <Button colorScheme="blue" onClick={() => setTabIndex(1)}>Continue</Button>
                  
                </Stack>
                <Stack spacing="8px" mt="14px">
                <Center>
                  <Text fontSize="12px" color="grey">
                  ------------------------------ or -------------------------------
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
              </TabPanel>
              <TabPanel>
              <Stack spacing="30px" >     
                  <FormControl id="name">
                    <FormLabel>
                      Income Bracket
                    </FormLabel>
                    <Select placeholder="Income Bracket" onChange={handleIncomeBracketChange}>
                      <option value="poor">$0-$29,999</option>
                      <option value="lower-middle">$30,00-$49,999</option>
                      <option value="middle">$50,000-$99,999</option>
                      <option value="upper-middle">$100,000-$399,999</option>
                      <option value="rich">$400,000+</option>
                    </Select>
                  </FormControl>
                  <FormControl id="Grade">
                    <FormLabel>
                      Interests
                    </FormLabel>
                    <Checkbox
                        isChecked={allChecked}
                        isIndeterminate={isIndeterminate}
                        onChange={(e) => setInterests([e.target.checked, e.target.checked, e.target.checked, e.target.checked, e.target.checked, ])}
                      >
                        STEM
                      </Checkbox>
                      <Stack pl={6} mt={1} spacing={1}>
                        <Checkbox
                          isChecked={interests[0]}
                          onChange={(e) => setInterests([e.target.checked, interests[1], interests[2], interests[3], interests[4]])}
                        >
                          Computer Science
                        </Checkbox>
                        <Checkbox
                          isChecked={interests[1]}
                          onChange={(e) => setInterests([interests[0], e.target.checked,interests[2],interests[3], interests[4],  ])}
                        >
                          Medicine
                        </Checkbox>
                        <Checkbox
                          isChecked={interests[2]}
                          onChange={(e) => setInterests([interests[0], interests[1], e.target.checked, interests[3],interests[4], ])}
                        >
                          Math
                        </Checkbox>
                        <Checkbox
                          isChecked={interests[3]}
                          onChange={(e) => setInterests([interests[0],  interests[1], interests[2], e.target.checked, interests[4]])}
                        >
                          Engineering
                        </Checkbox>
                        <Checkbox
                          isChecked={interests[4]}
                          onChange={(e) => setInterests([interests[0], interests[1], interests[2], interests[3], e.target.checked])}
                        >
                          Science
                        </Checkbox>
                      </Stack>
                      <Checkbox
                       
                       
                      >
                        Non-STEM
                      </Checkbox>
                      <Stack pl={6} mt={1} spacing={1}>
                        <Checkbox
                          //isChecked={interests[0]}
                          //onChange={(e) => setInterests([e.target.checked, interests[1], interests[2], interests[3], interests[4]])}
                        >
                          Writing
                        </Checkbox>
                        <Checkbox
                          //isChecked={interests[1]}
                          //onChange={(e) => setInterests([interests[0], e.target.checked,interests[2],interests[3], interests[4],  ])}
                        >
                          Business
                        </Checkbox>
                        <Checkbox
                          //isChecked={interests[2]}
                          //onChange={(e) => setInterests([interests[0], interests[1], e.target.checked, interests[3],interests[4], ])}
                        >
                          Leadership
                        </Checkbox>
                        <Checkbox
                          //isChecked={interests[3]}
                         // onChange={(e) => setInterests(interests[0],  interests[1], interests[2], e.target.checked, interests[4])}
                        >
                          Liberal Arts
                        </Checkbox>
                      </Stack>
                  </FormControl>
                  <Button colorScheme="blue" onClick={() => setTabIndex(2)}>Continue</Button>
                </Stack>
                <Stack spacing="8px" mt="14px">
                <Center>
                  <Text fontSize="12px" color="grey">
                  ------------------------------ or -------------------------------
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
              </TabPanel>
              <TabPanel>
                <Stack spacing="30px" >     
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
                  ------------------------------ or -------------------------------
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
              </TabPanel>
            </TabPanels>
          </Tabs>
          </Box>
        </Fade>
    </Flex>
  );
}