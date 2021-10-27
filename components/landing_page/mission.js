import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Spacer,
  Text,
  Wrap,
  WrapItem
} from "@chakra-ui/react";

export default function Mission({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      width="100%"
      pt={12}
      pl={16}
      pr={0}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="lg"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="m"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        <Wrap spacing="30px">
          <WrapItem>
            <Link href={ctaLink}>
              <Button
                colorScheme="blue"
                borderRadius="8px"
                variant="outline"
                py="4"
                px="4"
                lineHeight="1"
                size="lg"
              >
                {ctaText}
              </Button>
            </Link>
          </WrapItem>
        </Wrap>
      </Stack>
      <Spacer />
      <Box
        ml={5}
        w={{ base: "80%", sm: "60%", md: "50%" }}
        mb={{ base: 12, md: 0 }}
      >
        <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
      </Box>
    </Flex>
  );
}

Mission.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string
};

Mission.defaultProps = {
  title: "Our Mission",
  subtitle:
    "We are strengthening the pipeline that identifies high-potential underrepresented students in humanities and STEM by providing specific opportunities to develop their interests, preparing them to traverse the world in a country with a massively broken education system. ",
  image: "/process_req.svg",
  ctaText: "Learn More",
  ctaLink: "/about"
};
