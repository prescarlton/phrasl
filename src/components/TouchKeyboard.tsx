import { Box } from "@mui/material"
import KeyboardLetter from "./KeyboardLetter"

const keyboardRows = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
]
const TouchKeyboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: {
          lg: 1,
          xs: 0.75,
        },
        alignItems: "center",
        justifyContent: "center",
        width: {
          xs: "100%",
          lg: "30%",
        },
      }}>
      {keyboardRows.map((row) => (
        <Box
          key={JSON.stringify(row)}
          sx={{
            display: "flex",
            gap: {
              lg: 1,
              xs: 0.75,
            },
            alignItems: "center",
            justifyContent: "center",
          }}>
          {row.map((letter) => (
            <KeyboardLetter key={letter} letter={letter} />
          ))}
        </Box>
      ))}
    </Box>
  )
}

export default TouchKeyboard
