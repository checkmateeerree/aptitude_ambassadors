import {
  Flex,
  Wrap,
  WrapItem,
  Stack,
  Heading,
  Center,
  Button,
  Box
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

const SummerPrograms = ({ programs }) => {
  return (
    <Stack bgColor="rgba(74, 153, 211, 0.2)" py="10" spacing="10">
      <Center>
        <Heading>Summer Programs</Heading>
      </Center>

      <Wrap spacing="30px" justify="center">
        {programs.map((program) => {
          return (
            <WrapItem key={program.name}>
              <Box>
                <Stack>
                  <Center
                    style={{
                      width: "200px",
                      height: "100px",
                      position: "relative",
                      margin: "0 auto"
                    }}
                  >
                    <Image
                      src={program.logo}
                      alt={program.name + " Logo"}
                      layout="fill"
                      objectFit="contain"
                    />
                  </Center>
                  <Center w="350px">{program.name}</Center>
                </Stack>
              </Box>
            </WrapItem>
          );
        })}
      </Wrap>
      <Center>
        <Link href="programs">
          <Button size="lg">More Programs</Button>
        </Link>
      </Center>
    </Stack>
  );
};

export default SummerPrograms;

SummerPrograms.propTypes = {
  programs: PropTypes.array
};

SummerPrograms.defaultProps = {
  programs: [
    { name: "Telluride Association", logo: "/telluride-logo.png" },
    { name: "Girls Who Code", logo: "/gwc.png" },
    { name: "Princeton Summer Journalism Camp", logo: "/princeton_logo.png" },
    {
      name: "SSRP (Rockefeller University)",
      logo: "/Rockefeller_University.png"
    },
    { name: "MIT MOSTEC", logo: "/mostec-logo.png" },
    { name: "Hi-Step", logo: "/office_of_intramural.png" }
  ]
};
