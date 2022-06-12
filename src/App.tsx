import "./styles/global.css"
import { Box } from "@mui/material"
import Navbar from "./components/Navbar"
import { useContext } from "react"
import PuzzleContext from "./contexts/Puzzle"
import PuzzleDisplay from "./components/PuzzleDisplay"
import TouchKeyboard from "./components/TouchKeyboard"
import GameOver from "./components/GameOver"

function App() {
  const { gameStatus } = useContext(PuzzleContext)

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Box
        sx={{
          mt: 8,
          p: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        {gameStatus == "playing" && (
          <>
            <PuzzleDisplay />
            <TouchKeyboard />
          </>
        )}
        {gameStatus == "lost" && <GameOver />}
      </Box>
    </Box>
  )
}

export default App
