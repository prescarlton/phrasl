import { Dialog, DialogTitle } from "@mui/material"
import { MouseEventHandler } from "react"

const WelcomeDialog = ({
  open,
  onClose,
}: {
  open: boolean
  onClose: MouseEventHandler
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Welcome</DialogTitle>
    </Dialog>
  )
}
export default WelcomeDialog
