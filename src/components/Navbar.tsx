import { Box, Typography } from "@mui/material"

const Navbar = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        px: 2,
        py: 1,
        boxShadow: 2,
        boxSizing: "border-box",
        backgroundColor: "primary.main",
      }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#fff" }}>
        phrased.
      </Typography>
    </Box>
  )
}
export default Navbar
