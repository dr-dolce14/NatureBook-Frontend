import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import OrganismModal from './OrganismModal'
import { Grid, Paper} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 400,
    height: "100%",
    backgroundColor: "#BDB76B"
  },
  media: {
    height: 250,
    width: 400
  
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <div className="container" >
    <Box m={5} pt={5} className="item">
    <Card className={classes.root}>
    
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.organism.image} 
          title="Representative Organism"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.organism.common_name}
          </Typography>
          <br/>
          {/* <Typography variant="body2" color="textSecondary" component="p">
           Group: {props.organism.category}
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary" component="p">
            Scientific name: {props.organism.scientific_name}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
        <OrganismModal organism={props.organism}/>
      </CardActions>
    </Card>
    </Box>
    </div>
  );
}
