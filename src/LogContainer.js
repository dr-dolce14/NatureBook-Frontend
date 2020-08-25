import React from 'react'
import {Route, Switch, withRouter, Redirect } from 'react-router-dom'

class LogContainer extends React.Component {

    render () {
        console.log(this.props.user)

        return (
            <>

            {this.props.user ? 
            
                
            <h1>This is the Logs Container</h1>
            
            :
            <>
          
            <Redirect to='/' />
            </>
    }
    </>
        )
    }
}


export default withRouter(LogContainer)