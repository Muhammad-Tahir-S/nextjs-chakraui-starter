"use client";

import { ChakraBaseProvider } from "@chakra-ui/react";

import { theme } from "./components/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>;
}

//As of v2.4.2 there is now the addition of ChakraBaseProvider. This is a minimal version of ChakraProvider that only supplies theme tokens and not the default component theming.

//One of the biggest causes of the large initial JS payload is the size of the component themes. With the following approach, you get to apply the default themes for just the components you need by using extendBaseTheme.
