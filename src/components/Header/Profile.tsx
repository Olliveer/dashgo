import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Meu Nome</Text>
        <Text color="gray.300" fontSize="small">
          email@email.com
        </Text>
      </Box>

      <Avatar size="md" name="eu mesmo" src="https://github.com/olliveer.png" />
    </Flex>
  );
}
