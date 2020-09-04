import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class CreateComment extends React.Component {

    state = {
        user_id: this.props.user.id,
        sighting_id: this.props.data.sighting.id,
        // sighting_id: this.props.data.location.dataProps.props.sighting.id,
        content: ""
    }

    commentHandler = (commentObj) => {
        console.log(this.props.user)
        let auth_token = this.props.user.jwt
        fetch("http://localhost:3000/api/v1/comments", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + auth_token,
                accepts: "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({ comment: commentObj}),
        })
        .then(resp => resp.json())
        .then(newComment => this.props.submitHandler(newComment))  
        this.setState({user_id: this.props.user.id,
            sighting_id: this.props.data.sighting.id,
            // sighting_id: this.props.data.location.dataProps.props.sighting.id,
            content: ""

        })   
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

   commentSubmitHandler = (e) => {
       console.log(this.props, this.state)
       e.preventDefault()
       const newComment = {
        user_id: this.props.user.id,
        sighting_id: this.props.data.sighting.id,
        content: this.state.content
       }
       console.log(newComment)
       this.commentHandler(this.state)
   }
        
    render () {
        
// console.log(this.props.data.location.dataProps.props.sighting)
        return (
            <form onSubmit={this.commentSubmitHandler}>
            <h1>Comment on this sighting:</h1>
            <TextField id="outlined-basic" label="Your comment here" variant="outlined" name="content" value={this.state.content} onChange={this.changeHandler} />
            <br/>
            <Button variant='contained' color='primary' type="submit" name="submit" value="Post your comment!">Post your comment!</Button>
            
            </form>
        )
    }
}

export default CreateComment