import React, { FC, ReactElement } from "react";
import { Stack, Flex, Box } from "@chakra-ui/react";

export const Feature: FC<{
    content?: ReactElement;
    icon?: ReactElement;
}> = ({ content, icon }) => {
    return (
        <Stack direction={"row"} align={"center"} p={2}>
            <Flex w={8} h={8} align={"center"} justify={"center"} rounded={"full"}>
                {icon}
            </Flex>
            <Box p={15}>{content && content}</Box>
        </Stack>
    );
};
