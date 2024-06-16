import { Box, Button, Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import ContentItem from "./components/ContentItem";

export default function Dashboard() {
  const isSIMKLAuthorized = true;
  const isWatching = true;

  return (
    <Box width="40rem" p={6}>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Heading p={2} size="lg">
          Momate
        </Heading>
        <Spacer />
        <Button
          gap="2"
          colorScheme={isSIMKLAuthorized ? "green" : "blue"}
          isDisabled={isSIMKLAuthorized}
        >
          {isSIMKLAuthorized ? "Username SIMKL" : "Authorize SIMKL Account"}
        </Button>
      </Flex>
      {isSIMKLAuthorized ? (
        <>
          <Box p="2" marginY="6">
            <Center>
              <Heading size="md" textColor={isWatching ? "green" : "grey"}>
                {isWatching ? "Currently Watching" : "Nothing To Watch"}
              </Heading>
            </Center>
          </Box>
          {isWatching ? <ContentItem /> : <></>}
        </>
      ) : (
        <></>
      )}
    </Box>
  );
}
