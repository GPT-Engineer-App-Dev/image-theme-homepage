import { Box, Button, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box
      bgImage="url('https://example.com/path/to/image.jpg')"
      bgSize="cover"
      bgPosition="center"
      minH="100vh"
      color="white"
    >
      <Container maxW="container.lg">
        <Flex as="nav" justify="space-between" py={4}>
          <Heading size="lg">Logo</Heading>
          <Flex>
            <Link as={RouterLink} to="/" mx={2}>
              Home
            </Link>
            <Link as={RouterLink} to="/about" mx={2}>
              About
            </Link>
            <Link as={RouterLink} to="/services" mx={2}>
              Services
            </Link>
            <Link as={RouterLink} to="/contact" mx={2}>
              Contact
            </Link>
          </Flex>
        </Flex>
        <Flex direction="column" align="center" justify="center" minH="80vh">
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl">Welcome to Our Website</Heading>
            <Text fontSize="xl">We are glad to have you here. Explore our services and feel free to contact us.</Text>
            <Button colorScheme="teal" size="lg">Get Started</Button>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;