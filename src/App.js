import { Header, MantineProvider, Text } from "@mantine/core";

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    ></MantineProvider>
  );
}
