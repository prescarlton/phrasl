import { Box, Card, CardContent, CardHeader, Grid } from "@mui/material"
import { useContext } from "react"
import PuzzleContext from "../contexts/Puzzle"
import GuessCounterDisplay from "./GuessCounterDisplay"
import PuzzleWord from "./PuzzleWord"
import TouchKeyboard from "./TouchKeyboard"

const PuzzleDisplay = () => {
  const { puzzle, getPuzzleWords } = useContext(PuzzleContext)
  const words = getPuzzleWords()

  return (
    <Grid
      container
      sx={{
        width: {
          lg: "60%",
          xs: "100%",
        },
      }}
      spacing={{ xs: 1, lg: 2 }}>
      <Grid item xs={12}>
        <Card
          sx={{
            borderRadius: 4,
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
          elevation={2}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <GuessCounterDisplay />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card key={puzzle.id} elevation={2} sx={{ borderRadius: 4 }}>
          <CardHeader title={puzzle.category} />
          <CardContent
            sx={{
              display: "flex",
              flexWrap: "wrap",
              p: 1.5,
              overflowX: "hidden",
              columnGap: {
                lg: 7.25,
                xs: 4.25,
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
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <TouchKeyboard />
      </Grid>
    </Grid>
  )
}
export default PuzzleDisplay
