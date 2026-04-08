import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#8B5CF6",
    primaryLight: "#EDE9FE",
    primaryLighter: "#F5F3FF",
    primaryDark: "#5B21B6",
    secondary: "#EDE9FE",
    text: "#1C1917",
    textMuted: "#666",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.2)",
  },
};

export default theme;
