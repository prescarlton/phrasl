import { Card, CardContent, CardHeader } from "@mui/material"
import { useContext } from "react"
import PuzzleContext from "../contexts/Puzzle"
import PuzzleWord from "./PuzzleWord"

const PuzzleDisplay = () => {
  const { puzzle, getPuzzleWords } = useContext(PuzzleContext)
  const words = getPuzzleWords()

  return (
    <Card
      key={puzzle.id}
      sx={{
        width: {
          lg: "50%",
          xs: "100%",
        },
      }}>
      <CardHeader title={puzzle.category} />
      <CardContent
        sx={{
          display: "flex",
          flexWrap: "wrap",
          p: 2,
          overflowX: "auto",
          columnGap: {
            lg: 7,
            xs: 4,
          },
          rowGap: {
            lg: 1,
            xs: 0.5,
          },
        }}>
        {words.map((word) => (
          <PuzzleWord
            key={`${puzzle.id}-${word}-${words.indexOf(word)}`}
            word={word}
          />
        ))}
      </CardContent>
    </Card>
  )
}
export default PuzzleDisplay
