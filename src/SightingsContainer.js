import React from 'react'
import SightingCard from './SightingCard'
import {Route, Switch, withRouter, Redirect, NavLink } from 'react-router-dom'
import SightingsMap from './SightingsMap'
import CreateSightings from './CreateSightings'
import UpdateSighting from './UpdateSighting'



class SightingsContainer extends React.Component {

    state = {
        sightings: [],
        sighting: {}
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/sightings')
        .then(resp => resp.json())
        .then(data => this.setState({ sightings: data }))
    }

    renderSightings = () => {
        return this.state.sightings.map((sightingObj) => <SightingCard key={sightingObj.id} sighting={sightingObj} user={this.props} deleteHandler={this.deleteHandler} updateFormHandler={this.updateFormHandler} /> )
    }

    createSightingsHandler = (sightingObj) => {
        console.log(sightingObj, this.state.user)
        this.setState({
            sightings: [...this.state.sightings, sightingObj] }, () =>
            this.props.history.push('/sightings')
        )
    }

    deleteHandler = (sightingObj) => {
        fetch(`http://localhost:3000/api/v1/sightings/${sightingObj.id}`, {
            method: 'DELETE'
        })
        let newSightings = this.state.sightings.filter(sighting => sighting.id !== sightingObj.id)
        this.setState ({
            sightings: newSightings
        })
    }

    updateFormHandler = (sightingObj) => {
        this.setState({
            sighting: sightingObj }, () => this.props.history.push('/sightings/update')
        )
    }

    renderNewSighting = (sightingObj) => {
        let updatedSightings = this.state.sightings.map(sighting => {
            if(sighting.id === sightingObj.id) {
                return {...sighting,
                    "user_id": sightingObj.user_id,
                    "organism_id": sightingObj.organism_id,
                    "location": sightingObj.location,
                    "lat": sightingObj.lat,
                    "lng": sightingObj.lng,
                    "habitat": sightingObj.habitat,
                    "weather": sightingObj.weather,
                    "date": sightingObj.date
                    }
            } else {
                return sighting
            }
        })
        this.setState ({
            sightings: updatedSightings
        }, () => this.props.history.push('/sightings'))
    }


    updateSighting = (sightingObj) => {
        console.log(sightingObj)
        fetch(`http://localhost:3000/api/v1/sightings/${sightingObj.sighting_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({ 
                "user_id": sightingObj.user_id,
                "organism_id": sightingObj.organism_id,
                "location": sightingObj.location,
                "lat": sightingObj.lat,
                "lng": sightingObj.lng,
                "habitat": sightingObj.habitat,
                "weather": sightingObj.weather,
                "date": sightingObj.date
             })
        })
        .then(resp => resp.json())
        .then(sightObj => this.renderNewSighting(sightObj))
        }
        
    appClickHandler = (sightingObj) => {
        this.setState({
            sighting: sightingObj
        })

    }

    render () {

        return (
            <div>
                <Switch>
                    {/* <Route path='/sightings/:id' render={({match}) => {
                        let id = parseInt(match.params.id)
                        let foundSighting = this.state.sightings.find((sighting) => sighting.id === id)
                        console.log("Found Sighting: ", foundSighting)
                        return <SightingCard sighting={foundSighting} appClickHandler={this.appClickHandler} />
                    }} /> */}
                    <Route path='/sightings/map' render={() => 
                    <SightingsMap sightings={this.state.sightings}/>} 
                        />
                    <Route path='/sightings/create' render={() => <CreateSightings user={this.props.user} submitHandler={this.createSightingsHandler} />}/>
                    <Route path='/sightings/update' render={() => <UpdateSighting user={this.props.user} sighting={this.state.sighting} updateSighting={this.updateSighting}/>} />
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