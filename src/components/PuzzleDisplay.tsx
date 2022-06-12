import { Box, Card, CardContent, CardHeader } from "@mui/material"
import { useContext } from "react"
import PuzzleContext from "../contexts/Puzzle"
import PuzzleWord from "./PuzzleWord"

const PuzzleDisplay = () => {
  const puzzleContext = useContext(PuzzleContext)
  const puzzle = puzzleContext.puzzle
  const words = puzzleContext.getPuzzleWords()

  return (
    puzzle && (
      <Card
        key={puzzleContext.puzzle.id}
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
            <PuzzleWord key={`${word}-${words.indexOf(word)}`} word={word} />
          ))}
        </CardContent>
      </Card>
    )
  )
}
export default PuzzleDisplay
