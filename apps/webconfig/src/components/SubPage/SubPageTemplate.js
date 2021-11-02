import * as React from "react";
import { Box, Container, useColorModeValue as mode } from "@chakra-ui/react";
import PageHeader from "../../components/PageHeader";

export default function SubPageTemplate({
  children,
  title,
  navLinks,
  showPageHeader,
}) {
  return (
    <div>
      {showPageHeader && <PageHeader title={title} navLinks={navLinks} />}
      <Box as="main" py="8" flex="1">
        <Container maxW="7xl">
          <Box bg={mode("white", "gray.700")} p="2" rounded="lg" shadow="base">
            <Box
              border="2px dashed currentColor"
              borderColor={mode("gray.100", "gray.500")}
              p={6}
              rounded="lg"
              position="relative"
              minH="250px"
            >
              {children}
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
