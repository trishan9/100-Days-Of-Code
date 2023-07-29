import { Box, MenuItem, Stack, TextField } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [language, setLanguage] = useState<string[]>([]);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const languages = event.target.value
    setLanguage(typeof languages === "string" ? languages.split(",") : languages);
    console.log(languages);
  };

  return (
    <Box width="350px">
      <Stack direction="row" gap={2}>
        <TextField
          label="Select Language"
          SelectProps={{ multiple: true }}
          select
          fullWidth
          value={language}
          onChange={handleLanguageChange}
          color="secondary"
          size="small"
          helperText="Please select your expertise"
        >
          <MenuItem value="js">JavaScript</MenuItem>
          <MenuItem value="py">Python</MenuItem>
          <MenuItem value="php">PHP</MenuItem>
          <MenuItem value="sql">SQL</MenuItem>
        </TextField>
      </Stack>
    </Box>
  );
};

export default MuiSelect;
