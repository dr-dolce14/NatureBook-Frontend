import React from 'react'
import { NavLink } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import ListItemIcon from '@material-ui/core/ListItemIcon'

class NavBar extends React.Component {
    
    render() {
        return (
            <div className='main-nav'>
                <List component="nav">
                    <ListItem component="div" >
                        <ListItemText inset>   
                            <NavLink to='/'>Home</NavLink>
                        </ListItemText>
                        
                        <ListItemText inset>
                            {this.props.user?  (<NavLink to='/profile'>Profile</NavLink>)
                            :
                            (<NavLink to='/signup'>Sign Up</NavLink>)}
                        </ListItemText>
                      
                        <ListItemText inset>
                            <NavLink to='/sightings'>Sightings</NavLink>
                        </ListItemText>
                      
                        <ListItemText inset>
                            {this.props.user ? (<NavLink to='/login' onClick={this.props.clickHandler}>Log Out</NavLink>)
                  
                            : 
                 
                            (<NavLink to='/login'>Log In</NavLink>)}
                        </ListItemText>
                      
                        <ListItemText inset>
                            <NavLink to='/organisms'>Organisms</NavLink>
                        </ListItemText>
                </ListItem>
                </List>
            </div>
        )
    }

}

export default NavBar