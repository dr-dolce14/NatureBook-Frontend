import React from 'react'
import {Route, Switch, withRouter, Redirect, NavLink } from 'react-router-dom'
import MediaCard from './MediaCard'
import CreateOrganism from './CreateOrganism'

class OrganismsContainer extends React.Component {
    state = {
        organisms: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/organisms')
        .then(resp => resp.json())
        .then(data => this.setState({ organisms: data }))
    }

    renderOrganisms = () => {
        return this.state.organisms.map((orgObj) => <MediaCard key={orgObj.id} organism={orgObj} /> )
    }

    createHandler = (organismObj) => {
        fetch('http://localhost:3000/api/v1/organisms', {
            method: "POST",
            headers: {
                "accept": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({organism: organismObj})
        })
        .then(resp => resp.json())
        .then(organism => {
                
            this.setState({ organisms: [...this.state.organisms, organism] }, () => 
            this.props.history.push('/organisms'))

        })
    }


    render () {
        console.log(this.props.user)
        console.log(this.state.organisms)
       

        return (
            <>

            {this.props.user ? 
            
            (<Switch>
            <Route path='/organisms/create' render={() => <CreateOrganism submitHandler={this.createHandler} />}/>
            <Route path='/organisms' render={() => 
                <>
                <h1>Organisms</h1>
                <div><NavLink to='/organisms/create'>Create Your Own Organism!</NavLink></div>
                <div>{this.renderOrganisms()}</div>
                </>
            } />
            </Switch>)
           
            :
            <>
          
            <Redirect to='/' />
            </>
    }
    </>
        )
    }
}


export default withRouter(OrganismsContainer)