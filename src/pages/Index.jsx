import { Box, Container, Heading, VStack, Text, SimpleGrid, GridItem, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box bg="brand.700" color="white" p={4} borderRadius="md">
          <Heading as="h1" size="xl" textAlign="center">Financial News</Heading>
        </Box>

        {/* Headlines Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>Headlines</Heading>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
            <GridItem>
              <Box borderWidth="1px" borderRadius="md" overflow="hidden">
                <Image src="https://via.placeholder.com/300" alt="Headline 1" />
                <Box p={4}>
                  <Heading as="h3" size="md">Headline 1</Heading>
                  <Text mt={2}>Summary of the first headline...</Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem>
              <Box borderWidth="1px" borderRadius="md" overflow="hidden">
                <Image src="https://via.placeholder.com/300" alt="Headline 2" />
                <Box p={4}>
                  <Heading as="h3" size="md">Headline 2</Heading>
                  <Text mt={2}>Summary of the second headline...</Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem>
              <Box borderWidth="1px" borderRadius="md" overflow="hidden">
                <Image src="https://via.placeholder.com/300" alt="Headline 3" />
                <Box p={4}>
                  <Heading as="h3" size="md">Headline 3</Heading>
                  <Text mt={2}>Summary of the third headline...</Text>
                </Box>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>

        {/* Market Data Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>Market Data</Heading>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
            <GridItem>
              <Box borderWidth="1px" borderRadius="md" p={4}>
                <Heading as="h3" size="md">Market 1</Heading>
                <Text mt={2}>Details about market 1...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box borderWidth="1px" borderRadius="md" p={4}>
                <Heading as="h3" size="md">Market 2</Heading>
                <Text mt={2}>Details about market 2...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box borderWidth="1px" borderRadius="md" p={4}>
                <Heading as="h3" size="md">Market 3</Heading>
                <Text mt={2}>Details about market 3...</Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>

        {/* Featured Articles Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>Featured Articles</Heading>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
            <GridItem>
              <Box borderWidth="1px" borderRadius="md" overflow="hidden">
                <Image src="https://via.placeholder.com/300" alt="Article 1" />
                <Box p={4}>
                  <Heading as="h3" size="md">Article 1</Heading>
                  <Text mt={2}>Summary of the first article...</Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem>
              <Box borderWidth="1px" borderRadius="md" overflow="hidden">
                <Image src="https://via.placeholder.com/300" alt="Article 2" />
                <Box p={4}>
                  <Heading as="h3" size="md">Article 2</Heading>
                  <Text mt={2}>Summary of the second article...</Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem>
              <Box borderWidth="1px" borderRadius="md" overflow="hidden">
                <Image src="https://via.placeholder.com/300" alt="Article 3" />
                <Box p={4}>
                  <Heading as="h3" size="md">Article 3</Heading>
                  <Text mt={2}>Summary of the third article...</Text>
                </Box>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;