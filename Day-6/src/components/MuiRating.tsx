import { Rating, Stack } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);

  const handleRating = (
    event: React.ChangeEvent<object>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };

  console.log(value);

  return (
    <Stack direction={"column"}>
      <Rating
        value={value}
        onChange={handleRating}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteIcon fontSize="inherit" />}
      />
    </Stack>
  );
};

export default MuiRating;
