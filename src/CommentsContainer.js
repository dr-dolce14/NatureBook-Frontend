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
    }

    renderComments = () => {
        return this.state.comments.map((commentObj) => <CommentCard key={commentObj.id} comment={commentObj} user={this.props.user} /> )
    }

    createCommentsHandler = (commentObj) => {
        console.log(commentObj, this.state.user)
        this.setState({
            comments: [...this.state.comments, commentObj] }, () =>
            this.props.history.push('/sightings')
        )
    }

    

    render () {
        console.log(this.state.comments)

        return (
            <div>
            <Switch>
            <Route path='/comments/create' render={() => <CreateComment user={this.props.user} data={this.props} submitHandler={this.createCommentsHandler} />}/>
            <Route path='/comments' render={() => 
            <>
            <h1>This is the COMMENT CONTAINER</h1>
            {this.renderComments()}
            </>
            } />
            </Switch>
            </div>
        )
    }
}

export default withRouter(CommentsContainer)