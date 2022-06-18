import "./styles/global.css"
import { Box } from "@mui/material"
import Navbar from "./components/Navbar"
import PuzzleDisplay from "./components/PuzzleDisplay"

function App() {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}>
      <Navbar />
      <Box
        sx={{
          mt: 6,
          p: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}>
        <PuzzleDisplay />
      </Box>
    </Box>
  )
}

export default App
