import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material"
import { useContext } from "react"
import PuzzleContext from "../../contexts/Puzzle"

const GameOverDialog = ({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) => {
  const { puzzle, resetGame } = useContext(PuzzleContext)
  const handleClose = () => {
    onClose()
    resetGame()
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Game Over!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          The puzzle was{" "}
          <Typography fontWeight="bold">{puzzle.value}</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Play Again</Button>
      </DialogActions>
    </Dialog>
  )
}
export default GameOverDialog
