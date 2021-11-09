import Hero from "../components/landing_page/hero";
import SummerPrograms from "../components/landing_page/summer_programs/summer_programs";
import Mission from "../components/landing_page/mission";
import WorkingWithTeachers from "../components/landing_page/workwithteachers";
import WorkingWithStudents from "../components/landing_page/workingwithstudents";
import CallToAction from "../components/landing_page/calltoaction";
import {getSession} from "next-auth/client"
import {Flex, Heading, Text, VStack, HStack, Box, Wrap} from "@chakra-ui/layout"
import {Button, useToast} from "@chakra-ui/react"
import Link from 'next/link'
function Index({session}) {
  console.log(session)
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

  const handleMentorRequest = () => {
    createToast("Mentor request succeeded!", "Please check your email in the next 24 hours for an email from a mentor.", "success")
  }
  return (
    <>
      {session && (
        <Box>
          <Flex justify="center" pb="70px">
            <VStack spacing="20px">
              <Heading>Connect with a mentor</Heading>
              <Text fontSize="18px">
                Want a mentor? Request one by clicking the button down below, for free. 
              </Text>
              <Button colorScheme="blue" variant="outline" onClick={handleMentorRequest}>
                Ask for mentor
              </Button>
            </VStack>
          </Flex>
          <Flex justify="center" py="30px" bgColor="gray.200">
            <VStack spacing="20px">
              <Heading>Resources</Heading>
              <Text fontSize="18px">
                Find all of our other resources down below!
              </Text>
              <Wrap justify="center" px="20px">
                <a href="https://www.teachthought.com/technology/100-free-online-resources-for-students/">
                  <Button colorScheme="blue">
                    Educational Resources
                  </Button>
                </a>
                <Link href="/resources/programs">
                  <Button colorScheme="teal">
                    Summer Programs
                  </Button>
                </Link>
                <Link href="/resources/essays">
                  <Button colorScheme="red">
                    Sample Application Essays
                  </Button>
                </Link>
                <Link href="/resources/essayguide">
                  <Button colorScheme="yellow">
                    Application Essay Writing Guide
                  </Button>
                </Link>
              </Wrap>
            </VStack>
          </Flex>
        </Box>
      )
      }

      {!session && (
          <>
            <Hero />
            <SummerPrograms />
            <Mission />
            <WorkingWithTeachers />
            <WorkingWithStudents />
            <CallToAction />
          </>
        )
      }
    </>
  );
}

export default Index;

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  return {
      props: { session },
  };
}