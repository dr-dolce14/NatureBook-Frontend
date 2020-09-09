import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CreateComment from './CreateComment'
import {Route, Switch, withRouter, Redirect, NavLink, Link } from 'react-router-dom'
import CommentCard from './CommentCard'
import CommentsContainer from './CommentsContainer'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(props, "hey proppy rops")
  return (
    <div>
      <Button variant="outlined"  id="button" onClick={handleOpen}>
        Expand
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Location: {props.sighting.location}</h2>
            <img alt="" src={props.sighting.organism.image} width={'250px'} height={'200px'}/>
            <br/>
            {/* <h4>Comments:</h4> */}
            <>
            {/* {props.sighting.comments.map(comment => 
            <p id="transition-modal-description" key={comment.id}>{comment.content}</p> )} */}
            <CommentsContainer sighting={props.sighting} user={props.user.user}/>
            </>
          {/* <NavLink to={{pathname: `/comments/create/${props.sighting.id}`, dataProps:{props}}} exact >Create a Comment</NavLink>  */}
          </div>
        </Fade>
      </Modal>
      
    </div>
  );
}