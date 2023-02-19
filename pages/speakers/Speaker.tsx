import * as React from "react";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Speaker = (props: any) => {

  const handleClick = () => console.log(props.name)

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  const card = (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={ handleClick }>Learn More</Button>
      </CardActions>
    </>
  );
  return (
    <Card key={props.id} variant="outlined">
      { card }
    </Card>
  );
};

export default Speaker;
