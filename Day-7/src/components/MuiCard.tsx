import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width="full" margin={10}>
      <Typography variant="h4" component="p" align="center" gutterBottom>
        Our Blogs
      </Typography>

      <Stack marginTop="20px" direction="row" gap="16px" alignItems="stretch">
        <Card sx={{ width: "300px" }}>
          <CardMedia
            component="img"
            height="150"
            image="https://camo.githubusercontent.com/44ef4570e0663cb66576ea1a816223ff22d8493f29ba16ed054fad13d71f1222/68747470733a2f2f696d616765732e6374666173736574732e6e65742f7834776536356271693435712f3739636c5a585a6d745077577a5475783259496c676e2f61373863306635346537653633363932373565616163376530343933333833352f315f485369734c7569664d4f364b624c66504f4b744c6f772e6a706567"
            alt="React"
          />
          <CardContent>
            <Typography variant="h5" component="p" gutterBottom>
              React JS
            </Typography>

            <Typography color="text.secondary">
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on components.
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small">Like</Button>
            <Button size="small">Share</Button>
          </CardActions>
        </Card>

        <Card sx={{ width: "300px" }}>
          <CardMedia
            component="img"
            height="150"
            image="data:image/jpeg;base64,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"
            alt="Next JS"
          />
          <CardContent>
            <Typography variant="h5" component="p" gutterBottom>
              Next JS
            </Typography>

            <Typography color="text.secondary">
              Next.js is an open-source web development framework created by the
              private company Vercel providing React-based web applications with
              server-side rendering and static website generation.
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small">Like</Button>
            <Button size="small">Share</Button>
          </CardActions>
        </Card>
      </Stack>
    </Box>
  );
};

export default MuiCard;
