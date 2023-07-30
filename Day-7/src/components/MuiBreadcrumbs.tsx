import { Box, Breadcrumbs, Link } from "@mui/material";

const MuiBreadcrumbs = () => {
  return (
    <Box margin="10px">
      <Breadcrumbs separator="-" maxItems={2}>
        <Link underline="hover">Home</Link>
        <Link underline="hover">Products</Link>
        <Link underline="hover">Categories</Link>
        <Link underline="hover">Shoes</Link>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrumbs;
