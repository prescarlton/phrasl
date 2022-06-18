import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material"
import { useContext } from "react"
import PuzzleContext from "../../contexts/Puzzle"
import { gameOverParagraph } from "./GameOverContent"

const GameOverDialog = ({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) => {
  const { resetGame } = useContext(PuzzleContext)
  const handleClose = () => {
    onClose()
    resetGame()
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: "500px",
          height: "300px",
        },
      }}>
      <DialogTitle sx={{ fontWeight: "bold" }} variant="h2">
        Game Over!
      </DialogTitle>
      <DialogContent>
        {gameOverParagraph && (
          <DialogContentText>{gameOverParagraph}</DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained" color="primary">
          Play Again
        </Button>
      </DialogActions>
    </Dialog>
  )
}
export default GameOverDialog
