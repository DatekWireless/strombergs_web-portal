import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    TabPanel: {
      baseStyle: {
        backgroundColor: "red", // Normally, it is "semibold"
      },
    },
  },
});

export default theme;
