import {
  Flex,
  Wrap,
  WrapItem,
  Text,
  Center,
  Stack,
  Heading
} from "@chakra-ui/layout";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  Button,
  FormHelperText,
  IconButton
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";

const MotionFlex = motion(Flex);
const MotionWrapItem = motion(WrapItem);

export default function ContactUs() {
  return (
    <MotionFlex justify="center" pb="60px">
      <Wrap
        direction={{ base: "column", md: "row", lg: "row" }}
        spacing={{ base: "30px", md: "150px", lg: "200px" }}
      >
        <MotionWrapItem>
          <Fade in>
            <Stack spacing="30px">
              <Heading size="md">Leave us a Message</Heading>
              <FormControl id="name">
                <Input width="300px" type="name" placeholder="Your Name" />
              </FormControl>
              <FormControl id="email">
                <Input type="email" placeholder="Your Email" />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
              <FormControl id="message">
                <Textarea placeholder="Your Message" />
              </FormControl>
              <Button colorScheme="teal">Send Message</Button>
            </Stack>
          </Fade>
        </MotionWrapItem>
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
    </MotionFlex>
  );
}
