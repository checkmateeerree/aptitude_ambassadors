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
import {getSession} from  "next-auth/client"
import axios from "axios"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import Essay from "../../components/essay/essay";

const Essays = ({ session, data }) => {
    const isSummerEssay = (essay) => {
        return essay.type === "summer";
    }
    const isCollegeEssay = (essay) => {
        return essay.type === "college"
    }
    const summerEssays = data.filter(isSummerEssay)
    const collegeEssays = data.filter(isCollegeEssay)
    return (
        <Stack pb={10} spacing="10">
        <Center>
            <Heading>Sample Essays</Heading>
        </Center>

            {session && (
                <Tabs>
                    <TabList mx="8">
                    <Tab>Summer Essays</Tab>
                    <Tab>College Essays</Tab>
                    </TabList>
                
                    <TabPanels pt="8">
                        <TabPanel>
                            <Wrap spacing="20px" justify="center">
                                {summerEssays.map((essay) => {
                                    return (
                                        <Essay essay={essay} key={essay.prompt}/>
                                    );
                                })}
                            </Wrap>
                        </TabPanel>
                        <TabPanel>
                            <Wrap spacing="20px" justify="center">
                                {collegeEssays.map((essay) => {
                                    return (
                                        <Essay essay={essay} key={essay.prompt}/>
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
                    {data.slice(0, 2).map((essay) => {
                        return (
                            <Essay essay={essay} key={essay.prompt}/>
                        );
                    })}
                </Wrap>
                <Center>
                    <Link href="/register">
                        <Button size="lg" variant="outline" colorScheme="teal">Create an Account to View More Essays!</Button>
                    </Link>
                </Center>
            </>
            )
            }
        </Stack>
    );
};

export default Essays;

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });
    const res = await axios.get("https://aptitudeamplifiers.com/api/essays/getessays")
    const data = res.data.essays

    return {
        props: { session, data },
    };
}