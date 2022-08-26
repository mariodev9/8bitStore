import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `'Silkscreen', cursive`,
    heading: `'Montserrat', sans-serif`,
  },

  styles: {
    global: {
      input: {
        fontFamily: `'Montserrat', sans-serif`,
      },
    },
  },
});

export default theme;
