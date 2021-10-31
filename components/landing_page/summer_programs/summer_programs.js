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
import Program from "./program";

const SummerPrograms = ({ programs, moreProgramsLink }) => {
  return (
    <Stack bgColor="rgba(74, 153, 211, 0.2)" py="10" spacing="10">
      <Center>
        <Heading>Summer Programs</Heading>
      </Center>

      <Wrap spacing="30px" justify="center">
        {programs.slice(0, 3).map((program) => {
          return (
            <Program program={program} key={program.name}/>
          );
        })}
      </Wrap>
      <Center>
        <Link href={moreProgramsLink}>
          <Button size="lg" variant="outline" colorScheme="teal">More Programs</Button>
        </Link>
      </Center>
    </Stack>
  );
};

export default SummerPrograms;

SummerPrograms.propTypes = {
  programs: PropTypes.array,
  moreProgramsLink: PropTypes.string
};

SummerPrograms.defaultProps = {
  programs: [
    { 
      name: "Telluride Association", 
      image: "/telluride-logo.png",
      link: "https://www.tellurideassociation.org/",
    },
    { 
      name: "Girls Who Code", 
      image: "/gwc.png", 
      link: "https://girlswhocode.com/programs/summer-immersion-program"
    },
    { 
      name: "Princeton Summer Journalism Camp", 
      image: "/princeton_logo.png",
      link: "https://psjp.princeton.edu/"
    },
    {
      name: "SSRP (Rockefeller University)",
      image: "/Rockefeller_University.png",
      link: "https://www.rockefeller.edu/outreach/lab-initiative/summer-science/"
    },
    { 
      name: "MIT MOSTEC", 
      image: "/mostec-logo.png",
      link: "https://oeop.mit.edu/programs/mostec"
    },
    { 
      name: "Hi-Step", 
      image: "/office_of_intramural.png",
      link: "https://www.training.nih.gov/histep"
    }
  ],
  moreProgramsLink: "/resources/programs"
};
