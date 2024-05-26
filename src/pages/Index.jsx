import { Box, Button, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box
      backgroundImage="url('/background.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      color="white"
    >
      <Flex
        as="nav"
        bg="rgba(0, 0, 0, 0.6)"
        color="white"
        padding="1rem"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading size="md">My Website</Heading>
        <Flex gap="4">
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/services">Services</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </Flex>
      </Flex>

      <Container centerContent maxW="container.md" height="calc(100vh - 4rem)" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4} textAlign="center">
          <Heading size="2xl">Welcome to My Website</Heading>
          <Text fontSize="xl">We are glad to have you here. Explore our services and feel free to contact us.</Text>
          <Button colorScheme="teal" size="lg">Get Started</Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;