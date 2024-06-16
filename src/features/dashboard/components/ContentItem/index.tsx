import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
  Spacer,
} from "@chakra-ui/react";

export default function ContentItem() {
  return (
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
  );
}
