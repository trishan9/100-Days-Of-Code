import { Divider } from "@mui/material";
import MuiAutoComplete from "./components/MuiAutoComplete";
import MuiCard from "./components/MuiCard";
import MuiLayout from "./components/MuiLayout";
import MuiAccordion from "./components/MuiAccordion";
import MuiNavbar from "./components/MuiNavbar";
import MuiBreadcrumbs from "./components/MuiBreadcrumbs";

const App = () => {
  return (
    <>
      <MuiNavbar />
      <MuiBreadcrumbs />
      <MuiAutoComplete />
      <MuiLayout />
      <Divider />
      <MuiCard />
      <Divider />
      <MuiAccordion />
    </>
  );
};

export default App;
