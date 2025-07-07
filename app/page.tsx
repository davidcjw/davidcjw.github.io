"use client";

import { Box, Flex, Heading, Text, Button, Stack } from "@chakra-ui/react";
import DotGrid from "../blocks/Backgrounds/DotGrid/DotGrid";

export default function Home() {
  return (
    <Box position="relative" minH="100vh" bg="gray.900" overflow="hidden">
      {/* Visible DotGrid background for dark theme */}
      <Box position="fixed" top={0} left={0} w="100vw" h="100vh" zIndex={0} opacity={0.18} pointerEvents="none">
        <DotGrid baseColor="#3730a3" activeColor="#a5b4fc" dotSize={12} gap={28} proximity={120} shockRadius={220} shockStrength={3} resistance={900} returnDuration={1.5} />
      </Box>
      <Flex minH="100vh" direction="column" align="center" justify="center" px={4} position="relative" zIndex={1}>
        <Box as="header" w="full" py={6} mb={12}>
          <Stack direction="row" gap={8} justifyContent="center">
            <Button variant="ghost" colorScheme="purple" color="white">Works</Button>
            <Button variant="ghost" colorScheme="purple" color="white">Experience</Button>
            <Button variant="ghost" colorScheme="purple" color="white">Writings</Button>
          </Stack>
        </Box>
        <Stack gap={4} as="main" alignItems="center">
          <Heading as="h1" size="2xl" fontWeight="bold" color="white" fontFamily="var(--font-figtree)">
            David Chong
          </Heading>
          <Text fontSize="xl" color="gray.200">
            Software Engineer
          </Text>
          <Text fontSize="md" color="gray.400" maxW="md" textAlign="center">
            Lifelong Learner - from economics to finance to AI to software. My journey has been anything but linear.
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
}
