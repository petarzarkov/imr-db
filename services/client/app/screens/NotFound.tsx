import React, { FC } from "react";
import { Box, Heading, Text, Button, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NotFound: FC = () => {
    return (
        <Box textAlign="center" py={10} px={6}>
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bgGradient={`linear(to-r, ${useColorModeValue("primary.500", "primary.300")}, ${useColorModeValue("primary.700", "primary.500")})`}
                backgroundClip="text"
            >
                404
            </Heading>
            <Text fontSize="18px" mt={3} mb={2}>
                Page Not Found
            </Text>
            <Text color={useColorModeValue("primary.500", "primary.300")} mb={6}>
                The page you are looking for does not seem to exist
            </Text>

            <Button
                as={Link}
                to="/"
                bgGradient={`linear(to-r, ${useColorModeValue("primary.500", "primary.300")}, ${useColorModeValue("primary.700", "primary.500")})`}
                color="white"
                variant="solid"
            >
                Go to Home
            </Button>
        </Box>
    );
};
