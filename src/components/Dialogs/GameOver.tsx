import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material"
import { useContext } from "react"
import PuzzleContext from "../../contexts/Puzzle"

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
          borderRadius: 2,
        },
      }}>
      <DialogTitle sx={{ fontWeight: "bold" }}>Game Over!</DialogTitle>
      <DialogContent>
        <Button
          onClick={handleClose}
          variant="contained"
          color="primary"
          sx={{ borderRadius: 2 }}>
          Play Again
        </Button>
      </DialogContent>
    </Dialog>
  )
}
export default GameOverDialog
