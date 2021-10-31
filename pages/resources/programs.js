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
import {getSession} from  "next-auth/client"
import axios from "axios"

const Programs = ({ session, data }) => {
    console.log(data)
return (
    <Stack pb={10} spacing="10">
    <Center>
        <Heading>Summer Programs</Heading>
    </Center>

    {session && (
        <Wrap spacing="30px" justify="center">
            {data.map((program) => {
                return (
                    <Program program={program} key={program.name}/>
                );
            })}
        </Wrap>
    )}
    
    {!session &&
    (
    <>
        <Wrap spacing="30px" justify="center">
            {data.slice(0, 6).map((program) => {
                return (
                    <Program program={program} key={program.name}/>
                );
            })}
        </Wrap>
        <Center>
            <Link href="/register">
                <Button size="lg" variant="outline" colorScheme="teal">Create an Account to View Personalized Programs!</Button>
            </Link>
        </Center>
    </>
    )
    }
    </Stack>
);
};

export default Programs;

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });
    const res = await axios.get("aptitudeamplifiers/api/programs/getprograms")
    const data = res.data.programs

    return {
        props: { session, data },
    };
}