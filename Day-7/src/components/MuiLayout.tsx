import { Box, Paper } from "@mui/material";

const MuiBox = () => {
  return (
    <Paper sx={{ padding: "10px", margin: "10px" }}>
      <Box
        sx={{
          backgroundColor: "info.dark",
          color: "white",
          width: "450px",
          height: "450px",
          margin: "2rem",
          display: "flex",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "secondary.dark",
            width: "250px",
            height: "250px",
            "&:hover": {
              backgroundColor: "info.main",
              cursor: "pointer",
            },
          }}
        >
          Box 1
        </Box>

        <Box
          sx={{
            backgroundColor: "secondary.light",
            width: "250px",
            height: "250px",
            "&:hover": {
              backgroundColor: "info.main",
              cursor: "pointer",
            },
          }}
        >
          Box 2
        </Box>
      </Box>
    </Paper>
  );
};

export default MuiBox;
