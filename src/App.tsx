import "./styles/global.css"
import { Box, Typography } from "@mui/material"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Box>
      <Navbar />
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle1">There's nothing here quite yet.</Typography>
      </Box>
    </Box>
  )
}

export default App
