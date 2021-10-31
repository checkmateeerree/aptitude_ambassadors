import React from 'react'
import {
    WrapItem,
    Stack,
    Heading,
    Center,
    Button,
    Box
} from "@chakra-ui/react";
import Image from "next/image";
import Link from 'next/link'

const Program = ({program}) => {
    return (
        <WrapItem key={program.name}>
              <Box>
                <Stack>
                <a href={program.link}>
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
                  </a>
                </Stack>
              </Box>
            </WrapItem>
    )
}

export default Program
