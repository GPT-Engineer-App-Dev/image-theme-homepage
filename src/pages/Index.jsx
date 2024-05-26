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
      <Box as="nav" bg="rgba(0, 0, 0, 0.6)" p={4}>
        <Flex justify="space-between" align="center" maxW="container.lg" mx="auto">
          <Heading size="md">My Website</Heading>
          <Flex>
            <Link as={RouterLink} to="/" p={2} mx={2}>
              Home
            </Link>
            <Link as={RouterLink} to="/about" p={2} mx={2}>
              About
            </Link>
            <Link as={RouterLink} to="/services" p={2} mx={2}>
              Services
            </Link>
            <Link as={RouterLink} to="/contact" p={2} mx={2}>
              Contact
            </Link>
          </Flex>
        </Flex>
      </Box>
      <Container centerContent maxW="container.md" height="calc(100vh - 64px)" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4} textAlign="center">
          <Heading size="2xl">Welcome to My Website</Heading>
          <Text fontSize="xl">We are glad to have you here. Explore our services and get in touch!</Text>
          <Button colorScheme="teal" size="lg">Get Started</Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;