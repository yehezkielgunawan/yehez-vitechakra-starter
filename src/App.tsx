import { Center, Code, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import {
  Box,
  Button,
  useBreakpointValue,
  useColorMode,
  Image,
  Link as ChakraLink,
  Icon,
} from "@chakra-ui/react";
import { FaGithub, FaReact } from "react-icons/fa";
import { SiChakraui, SiTypescript, SiVite } from "react-icons/si";

import MotionBox from "components/motion/MotionBox";
import MainWrap from "components/wrapper/MainWrap";
import { useDesktopWidthCheck } from "functions/helpers/desktopWidthChecker";

function App() {
  const { colorMode } = useColorMode();
  const isDesktopWidth = useDesktopWidthCheck();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  return (
    <MainWrap>
      <Heading as="h3">Hello World!</Heading>
      <Box
        bg={colorMode === "light" ? "gray.300" : "gray.500"}
        p={2}
        borderRadius={4}
      >
        <Text fontSize={textSize}>
          This is an example text. This project is initiated using React
          Typescript (using Vite as build tool) + Chakra UI.
        </Text>
      </Box>
      <Center>
        <MotionBox
          animate={{ y: 20, scale: 0.9 }}
          transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
          marginY={8}
          maxWidth={[240, 320]}
        >
          <Image
            alt="Sample Image"
            boxSize={isDesktopWidth ? "150px" : "100px"}
            objectFit="cover"
            src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png"
          />
        </MotionBox>
      </Center>
      <Stack spacing={3} alignItems="center" justifyContent="center">
        <Flex gridGap={4}>
          <Icon as={FaReact} boxSize={8} />
          <Icon as={SiTypescript} boxSize={8} />
          <Icon as={SiVite} boxSize={8} />
          <Icon as={SiChakraui} boxSize={8} />
        </Flex>
        <Code fontSize={textSize}>
          npx degit yehezkielgunawan/yehez-vitechakra-starter{" "}
          {"<YOUR_APP_NAME>"}
        </Code>
      </Stack>
      <Button
        as="a"
        href="https://github.com/yehezkielgunawan/yehez-nextchakra-starter/generate"
        size="sm"
        colorScheme="teal"
        variant="outline"
        target="_blank"
      >
        Use This Template
      </Button>
      <Flex align="center" gridGap={3} justify="center" wrap="wrap">
        <Button
          as="a"
          href="https://github.com/yehezkielgunawan/yehez-vitechakra-starter"
          leftIcon={<FaGithub />}
          target="_blank"
        >
          Open in Github
        </Button>
        <ChakraLink
          isExternal
          href="https://vercel.com/import/git?s=https://github.com/yehezkielgunawan/yehez-vitechakra-starter"
        >
          <Image src="https://vercel.com/button" alt="Vercel deploy button" />
        </ChakraLink>
        <ChakraLink
          isExternal
          href="https://app.netlify.com/start/deploy?repository=https://github.com/yehezkielgunawan/yehez-vitechakra-starter"
        >
          <Image
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </ChakraLink>
      </Flex>
    </MainWrap>
  );
}

export default App;
