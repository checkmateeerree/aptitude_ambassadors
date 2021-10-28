import { Flex, Text, Wrap, WrapItem } from '@chakra-ui/layout'
import {Button} from '@chakra-ui/react'
import React from 'react'

export default function CallToAction() {
    return (
        <Flex 
            bgColor="#F5F5F5"
            px={8}
            py={16}
            justify="center"
            spacing="30px"
        >
            <Text
                fontSize={{lg: "2xl", base: "md"}}
                my="auto"
            >
                Sign up to our website to access our online resources and features!  
            </Text>
            <Wrap my="auto" pl="10">
                <WrapItem spacing="15px">
                    <Button
                        colorScheme="blue"
                        borderRadius="8px"
                        variant="outline"
                        py="4"
                        size="sm"
                        px="4"
                        lineHeight="1"
                    >
                        Join Today
                    </Button>
                </WrapItem>
                <WrapItem>
                    <Button
                        colorScheme="teal"
                        borderRadius="8px"
                        variant="outline"
                        py="4"
                        px="4"
                        size="sm"
                        lineHeight="1"
                    >
                        Contact Us
                    </Button>
                </WrapItem>
            </Wrap>
        </Flex>
    )
}


