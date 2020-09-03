import React from 'react'
import SightingCard from './SightingCard'

class Profile extends React.Component {

    state = {
        sightings: [],
        sighting: {}
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/sightings')
        .then(resp => resp.json())
        .then(data => this.setState({ sightings: data }))
    }

    userSightings = () => {
    return this.state.sightings.filter(sighting => sighting.user.id === this.props.user.id)
    }

    renderUserSightings = () => {
        return this.userSightings().map(sighting => <SightingCard key={sighting.id} sighting={sighting} user={this.props}  /> )
    }

 


    render() {
        console.log(this.props)
        console.log(this.state.sightings)
       

        return (
            <div>

            <h1>{this.props.user.username}</h1>
            <br />
            <img alt="" src={this.props.user.pic} width={'600px'} height={'400px'}/>
            <br/>
            <h2>My Sightings:</h2>
            {this.renderUserSightings()}
            </div>
        )
    }
}

export default Profile