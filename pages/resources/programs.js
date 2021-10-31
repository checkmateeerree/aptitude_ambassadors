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
import Program from "../../components/landing_page/summer_programs/program"

const Programs = ({ programs, registerLink }) => {
return (
    <Stack pb={10} spacing="10">
    <Center>
        <Heading>Summer Programs</Heading>
    </Center>

    <Wrap spacing="30px" justify="center">
        {programs.map((program) => {
        return (
            <Program program={program}/>
        );
        })}
    </Wrap>
    <Center>
        <Link href={registerLink}>
            <Button size="lg" variant="outline" colorScheme="teal">Create an Account to View Personalized Programs!</Button>
        </Link>
    </Center>
    </Stack>
);
};

export default Programs;

Programs.propTypes = {
programs: PropTypes.array,
registerLink: PropTypes.string
};

Programs.defaultProps = {
    programs: [
        { 
            name: "Telluride Association", 
            logo: "/telluride-logo.png",
            link: "https://www.tellurideassociation.org/",
        },
        { 
            name: "Girls Who Code", 
            logo: "/gwc.png", 
            link: "https://girlswhocode.com/programs/summer-immersion-program"
        },
        { 
            name: "Princeton Summer Journalism Camp", 
            logo: "/princeton_logo.png",
            link: "https://psjp.princeton.edu/"
        },
        {
            name: "SSRP (Rockefeller University)",
            logo: "/Rockefeller_University.png",
            link: "https://www.rockefeller.edu/outreach/lab-initiative/summer-science/"
        },
        { 
            name: "MIT MOSTEC", 
            logo: "/mostec-logo.png",
            link: "https://oeop.mit.edu/programs/mostec"
        },
        { 
            name: "Hi-Step", 
            logo: "/office_of_intramural.png",
            link: "https://www.training.nih.gov/histep"
        },
        { 
            name: "MIT MOSTEC", 
            logo: "/mostec-logo.png",
            link: "https://oeop.mit.edu/programs/mostec"
        },
        { 
            name: "Monell Apprenticeship Program", 
            logo: "/mostec-logo.png",
            link: "https://monell.org/science-apprenticeship-program/"
        },
        
            
    ],
    registerLink: "/register"
};
