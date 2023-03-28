import { extendTheme } from "@chakra-ui/react";
import { m } from "framer-motion";

const theme = extendTheme({
  fonts: {
    // body: `'Silkscreen', cursive`,
    // heading: `'Montserrat', sans-serif`,
  },

  breakpoints: {
    mobile: "360px",
    tablet: "834px",
    desktop: "1024px",
  },

  styles: {
    global: {
      fontFamily: " 'Inter', sans-serif",
    },
  },

  colors: {
    brand: {
      100: "#617245",
      300: "#465e33",
    },
    black: {
      100: "#1A1A1A",
    },
    gray: {
      100: "#F5F5F5",
      200: "#DEDEDE",
    },
    blue: {
      100: "#6AD2FF",
    },
  },

  components: {
    Button: {},
    Text: {
      variants: {
        title: {
          fontSize: { base: "30px", desktop: "40px" },
          fontWeight: 700,
        },
        simpleText: {
          fontSize: { base: "15px", desktop: "20px" },
        },
      },
    },
  },

  layerStyles: {
    paddingX: {
      px: { base: "30px", md: "70px" },
    },
  },
});

export default theme;
