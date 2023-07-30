import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MuiAccordion = () => {
  return (
    <Stack margin="10px" direction="column" gap="10px">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          React JS
        </AccordionSummary>

        <AccordionDetails>
          React is a free and open-source front-end JavaScript library for
          building user interfaces based on components.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Next JS
        </AccordionSummary>

        <AccordionDetails>
          Next.js is an open-source web development framework created by the
          private company Vercel providing React-based web applications with
          server-side rendering and static website generation.
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default MuiAccordion;
