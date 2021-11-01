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
      direction={{ base: "column", md: "row-reverse", lg: 'row-reverse' }}
      wrap="no-wrap"
      minH="70vh"
      pt={12}
      pl={{md: 5, lg: "125px"}}
      pr={0}
      mb={16}
      {...rest}
    >
      <Box
        w={{ base: "80%", sm: "60%", md: "50%" }}
        mb={{ base: 12, md: 0 }}
        pl={{ md: 4, lg: 6 }}
      >
        <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
      </Box>
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
  title: "Our mission",
  subtitle:
    "We are strengthening the pipeline that identifies high-potential underrepresented students in humanities and STEM by providing specific opportunities to develop their interests, preparing them to traverse the world in a country with a massively broken education system.",
  image: "/svgs/Splendid reviews in background check.svg",
  ctaText: "Learn More",
  ctaLink: "/about"
};
