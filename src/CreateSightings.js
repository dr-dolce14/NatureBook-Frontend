import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



class CreateSighting extends React.Component {

    state = {
       user_id: this.props.user.id,
       organism_id: "",
       location: "",
       lat: "",
       lng: "",
       habitat: "",
       weather: "",
       date: "",
       organisms: [],
       open: false
    }

    sightingHandler = (sightingObj) => {
        console.log(this.props.user)
        let auth_token = this.props.user.jwt
        fetch("http://localhost:3000/api/v1/sightings", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + auth_token,
                accepts: "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({ sighting: sightingObj}),
        })
        .then(resp => resp.json())
        .then(newSighting => this.props.submitHandler(newSighting))
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

   sightingSubmitHandler = (e) => {
       console.log(this.props, this.state)
       e.preventDefault()
       const newSighting = {
        user_id: this.props.user.id,
        organism_id: this.state.organism_id,
        location: this.state.location,
        lat: this.state.lat,
        lng: this.state.lng,
        habitat: this.state.habitat,
        weather: this.state.weather,
        date: this.state.date
       }
       console.log(newSighting)
       this.sightingHandler(this.state)
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

   handleClose = () => {
       this.setState({ open: false })
   }

   handleOpen = () => {
       this.setState({ open: true })
   }

    render() {

        return (
            <form onSubmit={this.sightingSubmitHandler}>
                <h1>Give us some info on what you saw and where you saw it</h1>
                <>
                <select
                name = 'organism_id'
                onChange={ (e) => 
                this.setState (
                    {
                        organism_id: e.target.value,
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
                <Button variant='contained' color='primary' type="submit" name="submit" value="Log your sighting!">Log Your Sighting!</Button>

            </form>
        )
    }
}

export default CreateSighting