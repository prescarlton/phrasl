import { ThemeProvider } from "@mui/material"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import PuzzleContext, { PuzzleProvider } from "./contexts/Puzzle"
import theme from "./themes/main"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PuzzleProvider>
        <App />
      </PuzzleProvider>
    </ThemeProvider>
  </React.StrictMode>
)
