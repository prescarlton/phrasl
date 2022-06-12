import { Button } from "@mui/material"

const KeyboardLetter = ({ letter }: { letter: string }) => {
  return (
    <Button
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D5D5D5",
        p: 1,
        borderRadius: 1,
        width: {
          xs: 30,
          lg: 48,
        },
        height: {
          xs: 48,
          lg: 64,
        },
        minWidth: 0,
        userSelect: "none",
        cursor: "pointer",
        color: "black",
        "&:hover": {
          color: "primary.main",
          backgroundColor: "#D5D5D5",
        },
      }}>
      {letter}
    </Button>
  )
}

export default KeyboardLetter
