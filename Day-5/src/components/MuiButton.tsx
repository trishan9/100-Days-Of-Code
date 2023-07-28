import { useState } from "react";
import {
  Button,
  ButtonGroup,
  IconButton,
  SpeedDialIcon,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
} from "@mui/material";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import PowerIcon from '@mui/icons-material/Power';
import PowerOffIcon from '@mui/icons-material/PowerOff';

const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([]);
  const [onOff, setOnOff] = useState<string>("");

  console.log({
    formats,
  });
  console.log(onOff)

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats);
  };

  const handleOnOff = (
    _event: React.MouseEvent<HTMLElement>,
    updatedOnOff: string
  ) => {
    setOnOff(updatedOnOff);
  };

  return (
    <Stack direction="column" gap={3}>
      <Stack display="block" direction="row" spacing={4}>
        <Button variant="contained" size="small">
          Click Me
        </Button>
        <Button variant="outlined" size="medium">
          Click Me
        </Button>
        <Button variant="text" size="large">
          Click Me
        </Button>
      </Stack>

      <Stack direction="row" gap={2}>
        <Tooltip title="Trishan">
          <Button variant="contained" color="primary">
            Click Me
          </Button>
        </Tooltip>
        <Button variant="outlined" color="secondary">
          Click Me
        </Button>
        <Button variant="text">Click Me</Button>
      </Stack>

      <Stack direction="row" gap={2}>
        <Button variant="contained" color="primary" endIcon={<AdsClickIcon />}>
          Click Me
        </Button>

        <Button
          variant="contained"
          color="primary"
          startIcon={<AdsClickIcon />}
        >
          Click Me
        </Button>

        <IconButton color="primary">
          <SpeedDialIcon />
        </IconButton>
      </Stack>

      <ButtonGroup>
        <Button>Hello World</Button>
        <Button>Hello World</Button>
        <Button>Hello World</Button>
      </ButtonGroup>

      <ToggleButtonGroup color="primary" value={formats} onChange={handleFormatChange}>
        <ToggleButton value="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underline">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup exclusive color="success" value={onOff} onChange={handleOnOff}>
        <ToggleButton value="on">
          <PowerIcon />
        </ToggleButton>
        <ToggleButton value="off">
          <PowerOffIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default MuiButton;
