import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
    
    render() {
        return (
            <div>
                <NavLink to='/'>Home</NavLink>
                <br />
                <NavLink to='/profile'>Profile</NavLink>
                <br/>
                <NavLink to='/signup'>Sign Up</NavLink>
                <br/>
                <NavLink to='/sightings'>See Sightings</NavLink>
                <br/>
                {this.props.user ? (<NavLink to='/login' onClick={this.props.clickHandler}>Log Out</NavLink>)
                  
                 : 
                (<NavLink to='/login'>Log In</NavLink>)}
                <br/>
                <NavLink to='/organisms'>Organisms</NavLink>
            </div>
        )
    }

}

export default NavBar