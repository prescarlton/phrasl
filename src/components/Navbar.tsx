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
        boxShadow: 1,
        boxSizing: "border-box",
        backgroundColor: "#fff",
      }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }} color="primary">
        phrasl
      </Typography>
    </Box>
  )
}
export default Navbar
