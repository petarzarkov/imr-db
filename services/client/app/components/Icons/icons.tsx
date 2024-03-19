import { FC, ReactElement } from "react";
import { portfolio } from "@config";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { IconLink } from "@components";
import { Flex, Icon, Image, useColorModeValue } from "@chakra-ui/react";

export const FlexIcon: FC<{ children: ReactElement }> = ({ children }) => (
    <Flex w={12} h={12} align={"center"} justify={"center"} rounded={"full"} bgColor={useColorModeValue("blackAlpha.100", "whiteAlpha.100")} mb={1}>
        {children}
    </Flex>
);

export const IconFlex: FC<Parameters<typeof Icon>[0]> = props => (
    <FlexIcon>
        <Icon {...props} />
    </FlexIcon>
);

export const IconLinkFlex: FC<Parameters<typeof IconLink>[0]> = props => (
    <FlexIcon>
        <IconLink {...props} />
    </FlexIcon>
);

export const ImageFlex: FC<Parameters<typeof Image>[0]> = props => (
    <FlexIcon>
        <Image {...props} />
    </FlexIcon>
);

export const Socials = {
    GitHub: ({ to = portfolio.github }) => (
        <IconLink
            to={to}
            icon={<BsGithub />}
            label={"github"}
            btnProps={{
                fontSize: "3xl",
            }}
        />
    ),
    LinkedIn: () => <IconLink to={portfolio.linkedin} icon={<BsLinkedin size="28px" />} label={"linkedin"} />,
    Twitter: () => <IconLink to={portfolio.twitter} icon={<BsTwitter size="28px" />} label={"twitter"} />,
};

