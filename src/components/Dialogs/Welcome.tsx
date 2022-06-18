import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material"
import { MouseEventHandler } from "react"
import { welcomeParagraph } from "./WelcomeContent"

const WelcomeDialog = ({
  open,
  onClose,
}: {
  open: boolean
  onClose: MouseEventHandler
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      PaperProps={{ sx: { width: "500px", height: "300px" } }}>
      <DialogContent>
        <DialogTitle
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            pl: 0,
          }}
          variant="h2">
          phrased.
        </DialogTitle>
        <DialogContentText>{welcomeParagraph}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClose} sx={{ px: 4 }}>
          Play
        </Button>
      </DialogActions>
    </Dialog>
  )
}
export default WelcomeDialog
