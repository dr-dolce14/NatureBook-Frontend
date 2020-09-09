import React from 'react'
import CreateComment from './CreateComment'
import CommentCard from './CommentCard'
import {Route, Switch, withRouter, Redirect, NavLink } from 'react-router-dom'

class CommentsContainer extends React.Component {
    state = {
        comments: [],
        comment: {}
    }
    componentDidMount() {
        fetch('http://localhost:3000/api/v1/comments')
        .then(resp => resp.json())
        .then(data => this.setState({ comments: data }))
        // .then(data => console.log(data))
    }

    sightingComments = () => {
        return this.state.comments.filter(commentObj => commentObj.sighting.id === this.props.sighting.id)
    }

    renderComments = () => {
            return this.sightingComments().map((commentObj, index) => <CommentCard key={index} comment={commentObj} />)
    }

    // renderComments = () => {
    //     return this.state.comments.map((commentObj, index) => <CommentCard key={index} comment={commentObj} /> )
    // }

    createCommentsHandler = (commentObj) => {
        console.log(commentObj, this.props.user)
        this.setState({
            comments: [...this.state.comments, commentObj] }, () =>
            this.props.history.push('/sightings')
        )
    }

    

    render () {
        console.log(this.state.comments)
        console.log(this.props)

        return (
            <div>

                <h2 id="comments">Comments:</h2>
                {this.renderComments()}
                {/* <CreateComment user={this.props.user} data={this.props} submitHandler={this.createCommentHandler} /> */}
                <CreateComment user={this.props.user} data={this.props} submitHandler={this.createCommentsHandler} />
           {/* <Switch>
            <Route path='/comments/create' render={() => <CreateComment user={this.props.user} data={this.props} submitHandler={this.createCommentsHandler} />}/>
            <Route path='/comments' render={() => 
            <>
            <h1>Comments:</h1>
            {this.renderComments()}
            </>
            } />
          </Switch>
            </div> */}
            </div>
        )
    }
}

export default withRouter(CommentsContainer)