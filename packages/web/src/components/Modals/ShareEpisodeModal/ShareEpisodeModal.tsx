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
  useClipboard,
} from "@chakra-ui/react";

import { Episode } from "src/queries/";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  episode: Episode | undefined;
}

const ShareEpisodeModal = ({ isOpen, onClose, episode }: Props) => {
  const episodeLink = `https://play.podhouse.app/episode/${episode?.id}`;
  const { hasCopied, onCopy } = useClipboard(episode ? episodeLink : "");

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Share</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack direction="row" spacing="20px">
            <Image
              src={episode?.image}
              objectFit="cover"
              borderRadius={5}
              width="120px"
              height="120px"
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
                {episode?.title}
              </Heading>
            </Stack>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Stack width="100%" direction="row" spacing="0px">
            <Input
              pr="4.5rem"
              type="text"
              value={episodeLink}
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
