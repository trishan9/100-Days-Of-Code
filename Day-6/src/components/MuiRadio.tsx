import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Stack,
  Box,
  Switch,
  Checkbox,
} from "@mui/material";
import { useState } from "react";

const MuiRadio = () => {
  const [experience, setExperience] = useState("");
  const [checkedDarkMode, setCheckedDarkMode] = useState(false);

  const handleChangeExperience = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExperience(event.target.value as string);
  };

  const handleDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedDarkMode(event.target.checked as boolean);
  };

  console.log(experience);
  console.log(checkedDarkMode);

  return (
    <Stack direction="column" gap="2" mt={3}>
      <FormControl>
        <FormLabel id="job-experience-label">Years of Experience</FormLabel>

        <RadioGroup
          name="job-experience"
          value={experience}
          onChange={handleChangeExperience}
          row
        >
          <FormControlLabel
            control={<Radio color="secondary" size="small" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel
            control={<Radio color="success" size="small" />}
            label="2-4"
            value="2-4"
          />
          <FormControlLabel
            control={<Radio color="warning" size="small" />}
            label="4-6"
            value="4-6"
          />
          <FormControlLabel
            control={<Radio size="small" />}
            label="6+"
            value="6+"
          />
        </RadioGroup>
      </FormControl>

      <Box>
        <FormControlLabel
          label="I am Dark Mode Lover"
          control={
            <Checkbox
              checked={checkedDarkMode}
              onChange={handleDarkMode}
              color="secondary"
            />
          }
        />

        <FormControlLabel
          label="Dark Mode"
          control={
            <Switch
              checked={checkedDarkMode}
              onChange={handleDarkMode}
              color="secondary"
            />
          }
        />
      </Box>
    </Stack>
  );
};

export default MuiRadio;
