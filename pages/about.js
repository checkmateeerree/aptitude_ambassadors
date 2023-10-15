import { Heading, Flex, Text, VStack, Center, Box, Wrap} from "@chakra-ui/react";

export default function About() {
  return (
    <Flex px="8" justify="center" pb="50">
        <VStack spacing="20px" maxWidth="800px">
          <Heading textAlign="center" borderBottom="1px solid" pb="5" width="400px">About Us</Heading>
          <Center>
            <Text textAlign="center">We are a team of high schoolers
              experienced in applying for competitive camps 
              that hope to lend our expertise to other 
              students. 
            </Text>
          </Center>
          <Heading textAlign="center" borderBottom="1px solid" pb="3" width="400px" size="md">Who We Are</Heading>
          <Wrap spacing="30px" justify="center">
              <Box>
                <Text fontWeight="bold" fontSize="18">Warren Wu - Co-founder</Text>
              </Box>
            
              <Box>
              <Text fontWeight="bold"  fontSize="18">Ryan Whalen - Program Director/Lead Mentor</Text>
              </Box>
              <Box>
              <Text fontWeight="bold"  fontSize="18">Eddie Mendel - Outreach Director/Junior Mentor</Text>
              </Box>
              <Box>
              <Text fontWeight="bold"  fontSize="18">Alan Hu - Content Director/Website &#38; App Developer</Text>
              </Box>
          </Wrap>
          <Heading textAlign="center" borderBottom="1px solid" pb="3" width="400px" size="md">Our Mission</Heading>
          <Text textAlign="center">
            Aptitude Amplifiers strengthens the pipeline that identifies high-potential underrepresented students in humanities and STEM by providing opportunities to develop their interests, giving them a leg up to navigate America's broken education system.
          </Text>
          <Heading textAlign="center" borderBottom="1px solid" pb="3" width="400px" size="md">
            Working with Teachers
          </Heading>
          <Text textAlign="center">
          We work with teachers to proactively coordinate presentation times and office hours, and communicate with them to evaluate which students will benefit most from mentorship, writing support, and summer enrichment opportunities.
          </Text>
          <Heading textAlign="center" borderBottom="1px solid" pb="3" width="400px" size="md">
            Working with Students
          </Heading>
          <Text textAlign="center">
           We hold one to one meetings with students to assess their personalities, interests, activities, and academics. In addition, we identify particular opportunities (e.g. competitions or summer programs) that would appeal to their interests, and support their application process as writing coaches.
          </Text>
          <Heading textAlign="center" borderBottom="1px solid" pb="3" width="400px" size="md">
            Website
          </Heading>
          <Text textAlign="center">
           Our website provides easy to access tools for students to excel at writing application essays, and learn more about different programs and getting into top colleges.
          </Text>
        </VStack>
    </Flex>

  );
}
