import { Stack, Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <Stack direction="column" gap={2}>
      <Typography variant="h1">Hello MUI</Typography>
      <Typography variant="h2">Hello MUI</Typography>
      <Typography variant="h3">Hello MUI</Typography>
      <Typography variant="h4">Hello MUI</Typography>
      <Typography variant="h5">Hello MUI</Typography>
      <Typography variant="h6">Hello MUI</Typography>

      <Typography gutterBottom>Hello MUI</Typography>
      <Typography gutterBottom>Hello MUI</Typography>

      <Typography color="primary">Hello MUI</Typography>
      <Typography color="secondary">Hello MUI</Typography>
    </Stack>
  );
};

export default MuiTypography;
