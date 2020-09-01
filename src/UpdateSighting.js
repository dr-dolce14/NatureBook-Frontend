import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class UpdateSighting extends React.Component {

    state = {
        user_id: this.props.sighting.user_id,
        sighting_id: this.props.sighting.id,
        organism_id: this.props.sighting.organism_id,
        location: this.props.sighting.location,
        lat: this.props.sighting.lat,
        lng: this.props.sighting.lng,
        habitat: this.props.sighting.habitat,
        weather: this.props.sighting.weather,
        date: this.props.sighting.date,
        organisms: [],
        open: false
     }

     componentDidMount() {
        let initialOrganisms = []
        fetch('http://localhost:3000/api/v1/organisms')
        .then(resp => resp.json())
        .then(data => {
            initialOrganisms = data.map(organism => {
                return organism
            })
            this.setState({
                organisms: initialOrganisms
            })
        })
    }

    // updateSighting = (sightingObj) => {
    //     console.log(sightingObj)
    //     fetch(`http://localhost:3000/api/v1/sightings/${sightingObj.sighting_id}`, {
    //         method: "PATCH",
    //         header: {
    //             "content-type": "application/json",
    //             "accept": "application/json"
    //         },
    //         body: JSON.stringify({
    //             user_id: sightingObj.user_id,
    //             sighting_id: sightingObj.sighting_id,
    //             organism_id: sightingObj.organism_id,
    //             location: sightingObj.location,
    //             lat: sightingObj.lat,
    //             lng: sightingObj.lng,
    //             habitat: sightingObj.habitat,
    //             weather: sightingObj.weather,
    //             date: sightingObj.date

    //          })
    //     })
    //     .then(resp => resp.json())
    //     .then(sightObj => this.props.renderNewSighting(sightObj))
    //     }

        changeHandler = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    
       sightingSubmitHandler = (e) => {
           console.log(this.props, this.state)
           e.preventDefault()
           
            this.setState ( {
            sighting_id: this.state.sighting_id,
            user_id: this.props.user.id,
            organism_id: this.state.organism_id,
            location: this.state.location,
            lat: this.state.lat,
            lng: this.state.lng,
            habitat: this.state.habitat,
            weather: this.state.weather,
            date: this.state.date
           }, () => {this.props.updateSighting(this.state)})
           
        //    console.log(this.state)
        //    this.props.updateSighting(this.state)
       }

    render () {
        console.log(this.state)

        return (
            <form onSubmit={this.sightingSubmitHandler}>
                <h1>Update your sighting</h1>
                <>
                <select
                name = 'organism_id'
                onChange={ (e) => 
                this.setState (
                    {
                        organism_id: parseInt(e.target.value),
                },
                console.log(e.target.value)
                )
            }>
                <option value='' disabled selected hidden>
                    Choose an organism
                </option>
                {this.state.organisms.map(organism => {
                    return (
                        <option key={organism.id} value={organism.id}>
                            {organism.common_name}
                        </option>
                    )
                })}
            </select>
                 </>           
                <br/>
                <TextField id="outlined-basic" label="Brief description of location where the organism was found" variant="outlined" name="location" value={this.state.location} onChange={this.changeHandler} />
                <br/>
                <TextField id="outlined-basic" label="Latitude of location" variant="outlined" name="lat"  value={this.state.lat} onChange={this.changeHandler} />
                <br/>
                <TextField id="outlined-basic" label="Longitude of location" variant="outlined" name="lng"  value={this.state.lng} onChange={this.changeHandler} />
                <br />
                <TextField id="outlined-basic" label="Brief description of the habitat" variant="outlined" name="habitat"  value={this.state.habitat} onChange={this.changeHandler} />
                <br/>
                <TextField id="outlined-basic" label="Brief description of the weather" variant="outlined" name="weather"  value={this.state.weather} onChange={this.changeHandler} />
                <br/>
                <TextField id="outlined-basic" label="Date and time of sighting" variant="outlined" name="date"  value={this.state.date} onChange={this.changeHandler} />
                <br/>
                <Button variant='contained' color='primary' type="submit" name="submit" value="Log your sighting!">Update Your Sighting!</Button>

            </form>
        )
    }
}


export default UpdateSighting