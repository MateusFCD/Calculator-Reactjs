import styled from "styled-components";
import { createTheme, Card, Box, useThemeProps } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#020202",
    },
    secondary: {
      main: "#2a2b2c",
    },
    background: {
      default: "hsl(216, 12%, 8%)",
      paper: "hsl(213, 19%, 18%)",
    },
    action: {
      active: "#ccc",
      hover: "#ccc",
      hoverOpacity: 0.1,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          height: "auto",
          width: "235px",
          borderRadius: "5px",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "repeat(4, 25%)",
          gridTemplateRows: " 1fr 48px 48px 48px 48px 48px",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          color: "#ffffff",
        },
      },
    },
  },
});

export const DisplayCalculator = styled.div`
  grid-column: span 4;
  background-color: #0004;
  display: flex;
  justify-content: flex-end;
  padding: 5%;
  font-size: 2.1em;
  color: #ffffff;
  overflow: hidden;
`;

export const Button = styled.button`
  font-size: 1.4em;
  border: 1px solid #888;
  background-color: #f0f0f0;
  outline: none;

  :active {
    background-color: #ccc;
  }
`;

export const Double = styled(Button)`
  grid-column: span 2;
`;
export const Triple = styled(Button)`
  grid-column: span 3;
`;
export const Operation = styled(Button)`
  background-color: #fa8231;
  color: #fff;

  :active {
    background-color: #fa8231cc;
  }
`;
