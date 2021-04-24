import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Image,
  Heading,
  Input,
  Text,
  useClipboard,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ShareEpisodeModal = ({ isOpen, onClose }: Props) => {
  const { hasCopied, onCopy } = useClipboard("https://99percentinvisible.org");

  return (
    <Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent width="400px" alignSelf="center">
        <ModalHeader>Share</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack direction="row" spacing="20px">
            <Image
              src="https://bit.ly/dan-abramov"
              objectFit="cover"
              borderRadius={5}
              maxWidth="160px"
              loading="lazy"
              justifySelf="center"
            />

            <Stack direction="column" spacing="10px">
              <Heading
                as="h1"
                fontWeight="700"
                fontSize="36px"
                letterSpacing="-0.03em"
                textAlign="start"
              >
                99% Invisible
              </Heading>

              <Heading
                as="h2"
                fontSize="16px"
                fontWeight="500"
                letterSpacing="-0.03em"
                textAlign="start"
              >
                Roman Mars
              </Heading>

              <Text>May 22, 2021</Text>
            </Stack>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Stack direction="row" spacing="0px">
            <Input
              pr="4.5rem"
              type="text"
              value="https://99percentinvisible.org"
              placeholder="Search for a podcast by title, author or owner"
              borderTopRightRadius="0px"
              borderBottomRightRadius="0px"
              isReadOnly
            />

            <Button
              onClick={onCopy}
              borderTopLeftRadius="0px"
              borderBottomLeftRadius="0px"
            >
              {hasCopied ? "Copied" : "Copy"}
            </Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ShareEpisodeModal;
