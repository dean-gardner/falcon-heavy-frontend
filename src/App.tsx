import * as React from "react";
import { ChakraProvider, Box, VStack, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Layout } from "./components/Layout/Layout";

import { Logo } from "./Logo";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Layout />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
