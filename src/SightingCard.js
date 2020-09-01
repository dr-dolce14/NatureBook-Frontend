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
import TransitionsModal from './TransitionsModal'


import { NavLink, Route, withRouter, Switch } from 'react-router-dom'



const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });



export default function SightingCard(props) {
  const classes = useStyles();

  
 
// console.log(props)
  return (
    <Box m={2} pt={3}>
    <Card className={classes.root} >
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image={"https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg"}
          title="Representative Habitat"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" >
           {props.sighting.location} 
          </Typography>
          <br/>
          <Typography variant="body2" color="textSecondary" component="p">
           Habitat: {props.sighting.habitat}
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary" component="p">
            Weather: {props.sighting.weather}
          </Typography>
          <br/>
          <Typography variant="body2" color="textSecondary" component="p">
            Organism sighted: {props.sighting.organism.common_name}
          </Typography>
          <br/>
          {/* Comments: 
          {props.sighting.comments.map(comment => 
           <Typography variant="body2" color="textSecondary" component="p" key={comment.id}>
             {comment.content}
           </Typography>
            )} */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={(e) => {
            e.preventDefault()
            props.deleteHandler(props.sighting)
          } } 
          variant="contained" size="small" color="primary">
          Delete
        </Button>
{/*         
            <NavLink to='/sightings/update'> */}
            <Button onClick={(e) => {
                e.preventDefault()
                props.updateFormHandler(props.sighting)
           } } 
            variant="contained" size="small" color="primary">
            Update
        </Button>
        <TransitionsModal sighting={props.sighting}/>
      </CardActions>
    </Card>
    </Box>
  );
}
