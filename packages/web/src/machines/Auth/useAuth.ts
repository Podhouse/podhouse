import { useMachine } from "@xstate/react";
import { useDisclosure } from "@chakra-ui/react";

import AuthMachine from "src/machines/Auth/AuthMachine";

const useAuth = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [current, send] = useMachine(AuthMachine);

  const handleAuth = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  const onOpenAuth = () => {
    onOpen();
  };

  const onCloseAuth = () => {
    send("GET_STARTED");
    onClose();
  };

  return {
    current,
    auth: isOpen,
    handleAuth,
    onOpenAuth,
    onCloseAuth,
    send,
  };
};

export default useAuth;
