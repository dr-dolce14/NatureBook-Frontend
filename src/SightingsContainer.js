import React from 'react'
import SightingCard from './SightingCard'
import {Route, Switch, withRouter, Redirect, NavLink } from 'react-router-dom'
import SightingsMap from './SightingsMap'
import CreateSightings from './CreateSightings'


class SightingsContainer extends React.Component {

    state = {
        sightings: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/sightings')
        .then(resp => resp.json())
        .then(data => this.setState({ sightings: data }))
    }

    renderSightings = () => {
        return this.state.sightings.map((sightingObj) => <SightingCard key={sightingObj.id} sighting={sightingObj} user={this.props} /> )
    }

    createSightingsHandler = (sightingObj) => {
        console.log(sightingObj, this.state.user)
        this.setState({
            sightings: [...this.state.sightings, sightingObj] }, () =>
            this.props.history.push('/sightings')
        )
    }


    render () {

        return (
            <div>
                <Switch>
                    <Route path='/sightings/map' render={() => 
                    <SightingsMap sightings={this.state.sightings}/>} 
                        />
                    <Route path='/sightings/create' render={() => <CreateSightings user={this.props.user} submitHandler={this.createSightingsHandler} />}/>
                    <Route path='/sightings' render={() => 
                        <>
                        <h1>Sightings Container</h1>
                        <NavLink to='/sightings/map'>Sightings Map</NavLink>
                        <br />
                        <NavLink to='/sightings/create'>Create Your Own Sighting!</NavLink>
                        {this.renderSightings()}
                        </>
                    } />
                </Switch>
            </div>
        )
    }
}

export default withRouter(SightingsContainer)