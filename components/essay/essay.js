import { Heading, Text, Stack } from '@chakra-ui/layout'
import React from 'react'

const Essay = ({essay}) => {
    return (
        <Stack px="8" spacing="30px">
            <Heading size="md">{essay.prompt}</Heading>
            <Text>{essay.text}</Text>
        </Stack>
    )
}

export default Essay
