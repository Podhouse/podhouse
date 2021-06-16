import { useColorMode } from "@chakra-ui/react";

const useColor = (darkColor: string, lightColor: string): string => {
  const { colorMode } = useColorMode();

  if (colorMode === "dark") {
    return darkColor;
  } else {
    return lightColor;
  }
};

export default useColor;
