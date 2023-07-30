import { Close } from "@mui/icons-material";
import { Box, Drawer, IconButton, Stack } from "@mui/material";

const MuiDrawer = (props: { isOpen: boolean; setIsOpen: any }) => {
  return (
    <Drawer
      anchor="left"
      open={props.isOpen}
      onClose={() => props.setIsOpen(false)}
    >
      <Box width="300px" padding="20px">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          Hello World
          <IconButton onClick={() => props.setIsOpen(false)}>
            <Close />
          </IconButton>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default MuiDrawer;
