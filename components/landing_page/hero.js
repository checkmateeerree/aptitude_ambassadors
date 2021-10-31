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
  Wrap,
  WrapItem
} from "@chakra-ui/react";

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  secondText,
  secondLink,
  ...rest
}) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
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
          size="2xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
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
                py="4"
                px="4"
                lineHeight="1"
                size="md"
              >
                {ctaText}
              </Button>
            </Link>
          </WrapItem>
          <WrapItem>
            <Link href={secondLink}>
              <Button
                colorScheme="green"
                variant="outline"
                borderRadius="8px"
                py="4"
                px="4"
                lineHeight="1"
                size="md"
              >
                {secondText}
              </Button>
            </Link>
          </WrapItem>
        </Wrap>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
      </Box>
    </Flex>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  secondText: PropTypes.string,
  secondLink : PropTypes.string
};

Hero.defaultProps = {
  title: "Bridging the education gap through interactive guidance.",
  subtitle:
    "We directly collaborate with teachers and underrepresented students to maximize their achievement potentials.",
  image: "/svgs/Online Math Class.svg",
  ctaText: "Join Today",
  ctaLink: "/register",
  secondText: "Learn More",
  secondLink: "/about"
};
