import { InputAdornment, Stack, TextField } from "@mui/material";

const MuiTextField = () => {
  return (
    <Stack mt={2} spacing={4}>
      <Stack direction={"row"} gap={4}>
        <TextField label="First Name" color="secondary" size="small" />
        <TextField label="First Name" color="secondary" variant="filled" />
        <TextField label="First Name" color="secondary" variant="standard" />
      </Stack>

      <Stack direction={"row"} gap={4}>
        <TextField
          label="Disabled Field"
          disabled
          color="secondary"
          size="small"
        />
        <TextField
          label="Country"
          InputProps={{ readOnly: true }}
          color="secondary"
          size="small"
        />
        <TextField
          type="email"
          label="Email Address"
          required
          error
          color="secondary"
          size="small"
        />
        <TextField
          type="password"
          label="Password"
          required
          color="secondary"
          size="small"
          helperText="Don't share you password to anyone"
        />
      </Stack>

      <Stack direction={"row"} gap={3}>
        <TextField label="Price" size="small" InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}/>
        <TextField label="Weight" size="small" InputProps={{endAdornment: <InputAdornment position="end">kg</InputAdornment>}} />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
