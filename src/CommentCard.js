import React from 'react'

class CommentCard extends React.Component {

    render () {
        console.log(this.props)
        
        return (
            <div>
            {/* <h1>{this.props.comment.sighting.location}</h1> */}
            <p>{this.props.comment.user.username} : {this.props.comment.content}</p>
           
            </div>
        )
    }
}

export default CommentCard