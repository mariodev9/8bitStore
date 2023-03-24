import { extendTheme } from "@chakra-ui/react";
import { m } from "framer-motion";

const theme = extendTheme({
  fonts: {
    // body: `'Silkscreen', cursive`,
    // heading: `'Montserrat', sans-serif`,
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
    Text: {
      variants: {
        title: {
          fontSize: "40px",
          fontWeight: 700,
        },
        simpleText: {
          fontSize: "20px",
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
