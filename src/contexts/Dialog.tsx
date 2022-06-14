import { createContext, ReactElement, useState } from "react"
import GameOverDialog from "../components/Dialogs/GameOver"
import WelcomeDialog from "../components/Dialogs/Welcome"

interface DialogContextInterface {
  showWelcomeDialog: () => void
  showGameOverDialog: () => void
}

const DialogContext = createContext({} as DialogContextInterface)
export default DialogContext

export const DialogProvider = ({ children }: { children: ReactElement }) => {
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(false)
  const [showGameOverDialog, setShowGameOverDialog] = useState(false)
  const openWelcomeDialog = () => setShowWelcomeDialog(true)
  const closeWelcomeDialog = () => setShowWelcomeDialog(false)
  const openGameOverDialog = () => setShowGameOverDialog(true)
  const closeGameOverDialog = () => setShowGameOverDialog(false)
  return (
    <DialogContext.Provider
      value={{
        showWelcomeDialog: openWelcomeDialog,
        showGameOverDialog: openGameOverDialog,
      }}>
      {children}
      <WelcomeDialog open={showWelcomeDialog} onClose={closeWelcomeDialog} />
      <GameOverDialog open={showGameOverDialog} onClose={closeGameOverDialog} />
    </DialogContext.Provider>
  )
}
