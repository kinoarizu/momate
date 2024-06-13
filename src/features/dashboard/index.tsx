import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";

export default function Dashboard() {
  const isSIMKLAuthorized = false;

  return (
    <Box width="40rem" p={6}>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="lg">Momate</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button
            colorScheme={isSIMKLAuthorized ? "green" : "blue"}
            isDisabled={isSIMKLAuthorized}
          >
            {isSIMKLAuthorized ? "Username SIMKL" : "Authorize SIMKL Account"}
          </Button>
        </ButtonGroup>
      </Flex>
      {isSIMKLAuthorized ? (
        <>
          <Box p="2" marginY="6">
            <Center>
              <Heading size="md" textColor="green">
                Currently Watching
              </Heading>
            </Center>
          </Box>
          <Card>
            <CardBody>
              <Flex flexDirection="row" alignItems="center">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Movie Name
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    View a summary of your currently movie watched.
                  </Text>
                </Box>
                <Spacer />
                <Text color="blue.600" fontSize="2xl">
                  40:22
                </Text>
              </Flex>
            </CardBody>
          </Card>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
}
