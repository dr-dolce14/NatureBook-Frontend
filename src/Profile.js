import React from 'react'
import SightingCard from './SightingCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from '@fortawesome/free-solid-svg-icons'
import { faCrow } from '@fortawesome/free-solid-svg-icons'
import { faFrog } from '@fortawesome/free-solid-svg-icons'
import { faDragon } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'




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

    calculateAmphibians = () => {

        let amphibiansArray = this.userSightings().filter(sighting => sighting.organism.category === "Amphibian")
        if (amphibiansArray.length > 0 && amphibiansArray.length <= 3) {
            return <FontAwesomeIcon icon={faFrog} size="2x" color="green"/>
        } else if (amphibiansArray.length > 3 && amphibiansArray.length < 5) {
            return <FontAwesomeIcon icon={faFrog} size="3x" color="blue"/>
        } else if (amphibiansArray.length > 5) {
            return <FontAwesomeIcon icon={faFrog} size="5x" color="orange"/>
        } else {
            return 'You have found 0 amphibians.'
        }
    }

    calculateReptiles = () => {

        let reptilesArray = this.userSightings().filter(sighting => sighting.organism.category === "Reptile")
        if (reptilesArray.length > 0 && reptilesArray.length <= 3) {
        return <FontAwesomeIcon icon={faDragon} size="2x" color="green"/>
        } else if (reptilesArray.length > 3 && reptilesArray.length <= 6) {
            return <FontAwesomeIcon icon={faDragon} size="3x" color="blue"/>
        } else if (reptilesArray.length > 6) {
            return <FontAwesomeIcon icon={faDragon} size="5x" color="orange"/>
        } else {
            return 'You have found 0 reptiles.'
        }
    }

    calculateBirds = () => {

        let birdsArray = this.userSightings().filter(sighting => sighting.organism.category === "Bird")
        if (birdsArray.length > 0 && birdsArray.length <= 3) {
            return <FontAwesomeIcon icon={faCrow} size="2x" color="green"/>
        } else if (birdsArray.length > 3 && birdsArray.length <= 6) {
            return <FontAwesomeIcon icon={faCrow} size="3x" color="blue"/>
        } else if (birdsArray.length > 6) {
            return <FontAwesomeIcon icon={faCrow} size="5x" color="orange"/>
        } else {
            return 'You have found 0 birds.'
        }
    }

    calculateInsects = () => {

        let insectsArray = this.userSightings().filter(sighting => sighting.organism.category === "Insect")
        if (insectsArray.length > 0 && insectsArray.length <= 3) {
            return   <FontAwesomeIcon icon={faBug} size="2x" color="green"/> 
        } else if (insectsArray.length > 3 && insectsArray.length <= 6) {
            return <FontAwesomeIcon icon={faBug} size="3x" color="blue"/>
        } else if (insectsArray.length > 6) {
            return <FontAwesomeIcon icon={faBug} size="5x" color="orange"/>
        } else {
            return 'You have found 0 insects.'
        }
    }

    calculateMammals = () => {
        let mammalsArray = this.userSightings().filter(sighting => sighting.organism.category === "Mammal")
        if (mammalsArray.length > 0 && mammalsArray.length <= 3) {
            return  <FontAwesomeIcon icon={faPaw} size="2x" color="green"/>
        } else if (mammalsArray.length > 3 && mammalsArray.length <= 6) {
            return <FontAwesomeIcon icon={faPaw} size="3x" color="blue"/>
        } else if (mammalsArray.length > 6) {
            return <FontAwesomeIcon icon={faPaw} size="5x" color="orange"/>
        } else {
            return 'You have found 0 mammals.'
        }
    }

 


    render() {
        console.log(this.props)
        console.log(this.state.sightings)
       

        return (
            <div>

            <h1>{this.props.user.username}</h1>
            <h2>Name: {this.props.user.firstname} {this.props.user.lastname}</h2>
            <br />
            <img id="profile" alt="" src={this.props.user.pic} width={'600px'} height={'400px'}/>
            <br/>
            
            <div >
                <div>
                <h2>Badge Levels:</h2>
                    <h4 id="record">Beginner: 1-3 organisms found, Junior: 4-6 organisms found, Senior: more than 7 organisms found</h4>
      
                </div>
                
                {/* <div className="item">
                    <h2>Junior: 4-6 organisms found</h2>
                </div>
            
                <div className="item">
                    <h2>Senior: more than 7 organisms found</h2>
                </div> */}
                
            </div>
            <div className="container" id="center">
                <div className="item" id="badges">
                    <h2>Amphibians:</h2>
                    <p>Beginner  <FontAwesomeIcon icon={faFrog} size="2x" color="green"/> </p>
                    <p>Junior  <FontAwesomeIcon icon={faFrog} size="3x" color="blue"/> </p>
                    <p>Senior  <FontAwesomeIcon icon={faFrog} size="5x" color="orange"/> </p>
                </div>
            <br/>
                <div className="item" id="badges">
                    <h2>Reptiles:</h2>
                    <p>Beginner  <FontAwesomeIcon icon={faDragon} size="2x" color="green"/> </p>
                    <p>Junior  <FontAwesomeIcon icon={faDragon} size="3x" color="blue"/> </p>
                    <p>Senior  <FontAwesomeIcon icon={faDragon} size="5x" color="orange"/> </p>
                </div>
            <br/>
                <div className="item" id="badges">
                    <h2>Birds:</h2>
                    <p>Beginner  <FontAwesomeIcon icon={faCrow} size="2x" color="green"/> </p>
                    <p>Junior  <FontAwesomeIcon icon={faCrow} size="3x" color="blue"/> </p>
                    <p>Senior  <FontAwesomeIcon icon={faCrow} size="5x" color="orange"/> </p>
                </div>
            <br/>
                <div className="item" id="badges">
                    <h2>Mammals:</h2>
                    <p>Beginner  <FontAwesomeIcon icon={faPaw} size="2x" color="green"/> </p>
                    <p>Junior  <FontAwesomeIcon icon={faPaw} size="3x" color="blue"/> </p>
                    <p>Senior  <FontAwesomeIcon icon={faPaw} size="5x" color="orange"/> </p>    
                </div> 
            <br/>
                <div className="item" id="badges">
                   <h2>Insects:</h2>
                   <p>Beginner  <FontAwesomeIcon icon={faBug} size="2x" color="green"/> </p>
                   <p>Junior  <FontAwesomeIcon icon={faBug} size="3x" color="blue"/> </p>
                   <p>Senior  <FontAwesomeIcon icon={faBug} size="5x" color="orange"/> </p>
                </div>
            </div>
            <br/> 
            <br></br>  
            <h2>My Badges:</h2>
            <h2>Amphibians: {this.calculateAmphibians()}</h2>
            <h2>Reptiles: {this.calculateReptiles()}</h2>
            <h2>Birds: {this.calculateBirds()}</h2>
            <h2>Insects: {this.calculateInsects()}</h2>
            <h2>Mammals: {this.calculateMammals()}</h2>
            {/* {this.userSightings().map(sighting => <p key={sighting.id}>{sighting.organism.category}</p>)} */}
            <br/>
            <h1>My Sightings:</h1>
            {this.renderUserSightings()}
            </div>
        )
    }
}

export default Profile