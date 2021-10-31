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
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

const Programs = ({ session, data }) => {
    const isStemProgram = (program) => {
        return program.type === "Stem";
    }
    const isNonStemProgram = (program) => {
        return program.type === "Non-Stem"
    }
    const stemPrograms = data.filter(isStemProgram)
    const nonStemPrograms = data.filter(isNonStemProgram)
    return (
        <Stack pb={10} spacing="10">
        <Center>
            <Heading>Summer Programs</Heading>
        </Center>

            {session && (
                <Tabs>
                    <TabList mx="8">
                    <Tab>Stem Programs</Tab>
                    <Tab>Non Stem Programs</Tab>
                    </TabList>
                
                    <TabPanels pt="8">
                        <TabPanel>
                            <Wrap spacing="20px" justify="center">
                                {stemPrograms.map((program) => {
                                    return (
                                        <Program program={program} key={program.name}/>
                                    );
                                })}
                            </Wrap>
                        </TabPanel>
                        <TabPanel>
                            <Wrap spacing="20px" justify="center">
                                {nonStemPrograms.map((program) => {
                                    return (
                                        <Program program={program} key={program.name}/>
                                    );
                                })}
                            </Wrap>
                        </TabPanel>
                    </TabPanels>
              </Tabs>
            )}
            
            {!session &&
            (
            <>
                <Wrap spacing="30px" justify="center">
                    {data.slice(0, 8).map((program) => {
                        return (
                            <Program program={program} key={program.name}/>
                        );
                    })}
                </Wrap>
                <Center>
                    <Link href="/register">
                        <Button size="lg" variant="outline" colorScheme="teal">Create an Account to View More Personalized Programs!</Button>
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
    const res = await axios.get("https://www.aptitudeamplifiers.com/api/programs/getprograms")
    const data = res.data.programs

    return {
        props: { session, data },
    };
}