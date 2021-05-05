import React from "react";
import {
  Stack,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  useColorMode,
} from "@chakra-ui/react";

const PrivacyPolicy = () => {
  const { colorMode } = useColorMode();

  const color = colorMode === "dark" ? "#B7B7B7" : "#8c8c8c";

  return (
    <Stack
      direction="column"
      spacing="20px"
      p="20px"
      w="100%"
      h="100%"
      maxW="500px"
      margin="0 auto"
    >
      <Stack direction="column" spacing="10px">
        <Heading as="h1" fontSize={36} textAlign="start">
          Privacy Policy
        </Heading>

        <Text
          fontSize={16}
          lineHeight="30px"
          fontWeight="300"
          textAlign="start"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </Stack>

      <Stack direction="column" spacing="30px">
        <Text lineHeight="30px">
          At Podhouse, accessible from https://podhouse.app/, one of our main
          priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by Podhouse and how we use it. If you have additional questions or
          require more information about our Privacy Policy, do not hesitate to
          contact us. This Privacy Policy applies only to our online activities
          and is valid for visitors to our website with regards to the
          information that they shared and/or collect in Podhouse. This policy
          is not applicable to any information collected offline or via channels
          other than this website. Our Privacy Policy was created with the help
          of the Online Generator of Privacy Policy.
        </Text>

        <Stack direction="column" spacing="10px">
          <Heading as="h2" fontSize={16} textAlign="start">
            Consent
          </Heading>
          <Text lineHeight="30px">
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </Text>
        </Stack>

        <Stack direction="column" spacing="10px">
          <Heading as="h2" fontSize={16} textAlign="start">
            Information we collect
          </Heading>
          <Text lineHeight="30px">
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information. If you
            contact us directly, we may receive additional information about you
            such as your name, email address, phone number, the contents of the
            message and/or attachments you may send us, and any other
            information you may choose to provide. When you register for an
            Account, we may ask for your contact information, including items
            such as name, company name, address, email address, and telephone
            number.
          </Text>
        </Stack>

        <Stack direction="column" spacing="10px">
          <Heading as="h2" fontSize={16} textAlign="start">
            How we use your information{" "}
          </Heading>
          <Text lineHeight="30px">
            We use the information we collect in various ways, including to:
          </Text>
          <UnorderedList variant="light">
            <ListItem
              color={color}
              fontFamily="Passenger Sans"
              fontSize="16px"
              fontWeight="300"
              fontStyle="normal"
              lineHeight="30px"
            >
              Provide, operate, and maintain our website
            </ListItem>
            <ListItem
              color={color}
              fontFamily="Passenger Sans"
              fontSize="16px"
              fontWeight="300"
              fontStyle="normal"
              lineHeight="30px"
            >
              Improve, personalize, and expand our website
            </ListItem>
            <ListItem
              color={color}
              fontFamily="Passenger Sans"
              fontSize="16px"
              fontWeight="300"
              fontStyle="normal"
              lineHeight="30px"
            >
              Understand and analyze how you use our website
            </ListItem>
            <ListItem
              color={color}
              fontFamily="Passenger Sans"
              fontSize="16px"
              fontWeight="300"
              fontStyle="normal"
              lineHeight="30px"
            >
              Develop new products, services, features, and functionality
            </ListItem>
            <ListItem
              color={color}
              fontFamily="Passenger Sans"
              fontSize="16px"
              fontWeight="300"
              fontStyle="normal"
              lineHeight="30px"
            >
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes
            </ListItem>
            <ListItem
              color={color}
              fontFamily="Passenger Sans"
              fontSize="16px"
              fontWeight="300"
              fontStyle="normal"
              lineHeight="30px"
            >
              Send you emails
            </ListItem>
            <ListItem
              color={color}
              fontFamily="Passenger Sans"
              fontSize="16px"
              fontWeight="300"
              fontStyle="normal"
              lineHeight="30px"
            >
              {" "}
              Find and prevent fraud
            </ListItem>
          </UnorderedList>
        </Stack>

        <Stack direction="column" spacing="10px">
          <Heading as="h2" fontSize={16} textAlign="start">
            Log Files
          </Heading>
          <Text lineHeight="30px">
            Podhouse follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services' analytics. The information
            collected by log files include internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users' movement on the website, and gathering
            demographic information.
          </Text>
        </Stack>

        <Stack direction="column" spacing="10px">
          <Heading as="h2" fontSize={16} textAlign="start">
            Advertising Partners Privacy Policies
          </Heading>
          <Text lineHeight="30px">
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of Podhouse. Third-party ad servers or ad
            networks uses technologies like cookies, JavaScript, or Web Beacons
            that are used in their respective advertisements and links that
            appear on Podhouse, which are sent directly to users' browser. They
            automatically receive your IP address when this occurs. These
            technologies are used to measure the effectiveness of their
            advertising campaigns and/or to personalize the advertising content
            that you see on websites that you visit. Note that Podhouse has no
            access to or control over these cookies that are used by third-party
            advertisers.
          </Text>
        </Stack>

        <Stack direction="column" spacing="10px">
          <Heading as="h2" fontSize={16} textAlign="start">
            Third Party Privacy Policies
          </Heading>
          <Text lineHeight="30px">
            Podhouse's Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options. You can choose to disable cookies
            through your individual browser options. To know more detailed
            information about cookie management with specific web browsers, it
            can be found at the browsers' respective websites.
          </Text>
        </Stack>

        <Stack direction="column" spacing="10px">
          <Heading as="h2" fontSize={16} textAlign="start">
            CCPA Privacy Rights (Do Not Sell My Personal Information)
          </Heading>
          <Text lineHeight="30px">
            Under the CCPA, among other rights, California consumers have the
            right to: Request that a business that collects a consumer's
            personal data disclose the categories and specific pieces of
            personal data that a business has collected about consumers. Request
            that a business delete any personal data about the consumer that a
            business has collected. Request that a business that sells a
            consumer's personal data, not sell the consumer's personal data. If
            you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </Text>
        </Stack>

        <Stack direction="column" spacing="10px">
          <Heading as="h2" fontSize={16} textAlign="start">
            GDPR Data Protection Rights
          </Heading>
          <Text lineHeight="30px">
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following: The
            right to access – You have the right to request copies of your
            personal data. We may charge you a small fee for this service. The
            right to rectification – You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete. The right to erasure – You have the right to request
            that we erase your personal data, under certain conditions. The
            right to restrict processing – You have the right to request that we
            restrict the processing of your personal data, under certain
            conditions. The right to object to processing – You have the right
            to object to our processing of your personal data, under certain
            conditions. The right to data portability – You have the right to
            request that we transfer the data that we have collected to another
            organization, or directly to you, under certain conditions. If you
            make a request, we have one month to respond to you. If you would
            like to exercise any of these rights, please contact us.
          </Text>
        </Stack>

        <Stack direction="column" spacing="10px">
          <Heading as="h2" fontSize={16} textAlign="start">
            Children's Information
          </Heading>
          <Text lineHeight="30px">
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
            Podhouse does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PrivacyPolicy;
