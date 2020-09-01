import React from 'react'

class CommentCard extends React.Component {

    render () {
        
        return (
            <div>
            <h1>{this.props.comment.sighting.location}</h1>
            <p>{this.props.comment.content}</p>
            </div>
        )
    }
}

export default CommentCard