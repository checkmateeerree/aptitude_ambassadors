import { Flex } from '@chakra-ui/layout'
import React from 'react'

const EssayGuide = (session) => {
    return (
        <Flex pb="10" justify="center">
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vRfNWX5wNK5uf-cPKl4NKomgF7YZbfNf08GVlTuB2SEqFeQvUrUtqeXAKt5pok0ReSbN6aq8gV_OWfb/pub?embedded=true" width="50%" height="500px"></iframe>
        </Flex>
    )
}

export default EssayGuide

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });
    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    } 
    return {
        props: { session },
    };
}