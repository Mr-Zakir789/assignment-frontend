import { createTheme } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: TypographyOptions = {
  fontFamily: "'Inter', sans-serif", 

  h1: { fontSize: "40px", fontWeight: 700, lineHeight: "48px" },
  h2: { fontSize: "32px", fontWeight: 600, lineHeight: "42px" },
  h3: { fontSize: "28px", fontWeight: 600, lineHeight: "36px" },
  h4: { fontSize: "24px", fontWeight: 500, lineHeight: "32px" },
  h5: { fontSize: "20px", fontWeight: 500, lineHeight: "28px" },
  h6: { fontSize: "16px", fontWeight: 500, lineHeight: "24px" },
  body1: { fontSize: "16px", fontWeight: 400, lineHeight: "24px" },
  body2: { fontSize: "14px", fontWeight: 400, lineHeight: "22px" },
  caption: { fontSize: "12px", fontWeight: 400, lineHeight: "18px" },
  button: { fontSize: "14px", fontWeight: 600, textTransform: "none", lineHeight: "20px" },
};

// Define color palette
const palette = {
  primary: {
    main: "#007BFF",
    light: "#66B2FF",
    dark: "#0056B3",
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#FF4081",
    light: "#FF79B0",
    dark: "#C60055",
    contrastText: "#FFFFFF",
  },
  background: {
    default: "#F5F5F5",
    paper: "#FFFFFF",
  },
  text: {
    primary: "#212121",
    secondary: "#757575",
  },
};

// Create MUI theme
const theme = createTheme({
  typography,
  palette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
