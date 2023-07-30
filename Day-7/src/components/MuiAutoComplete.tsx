import { Autocomplete, Box, TextField } from "@mui/material";
import { useState } from "react";

const skills = ["HTML", "CSS", "JavaScript", "Python", "React"];

const MuiAutoComplete = () => {
  const [skill, setSkill] = useState<string | null>(null);
  console.log(skill);

  return (
    <Box width="300px" margin="10px">
      <Autocomplete
        options={skills}
        value={skill}
        onChange={(event: React.ChangeEvent<object>, newValue: string | null) =>
          setSkill(newValue)
        }
        renderInput={(params) => (
          <TextField color="secondary" label="Select Skill" {...params} />
        )}
      />
    </Box>
  );
};

export default MuiAutoComplete;
