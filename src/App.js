import React from 'react';
import GoogleMaps from './GoogleMaps'
import NavBar from './NavBar'
import { Route, withRouter, Switch } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import OrganismsContainer from './OrganismsContainer'
import SightingsContainer from './SightingsContainer'
import CommentsContainer from './CommentsContainer'
import Profile from './Profile'


import './App.css';

class App extends React.Component {

  state = {
    user: null,
  }

  componentDidMount() {
      const token = localStorage.getItem("token");
      if (token) {
        fetch("http://localhost:3000/api/v1/profile", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        })
          .then(resp => resp.json())
          .then(data =>
            this.setState({ user: data.user })
          );
      } else {
        this.props.history.push("/")
      }
    }

   
  signUpHandler = (userObj) => {
    console.log(userObj);
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ user: userObj }),
    })
      .then(resp => resp.json())
      .then(data =>
        this.setState({ user: data.user }, () =>
          this.props.history.push("/logs")
        )
      );
      
  };

  loginHandler = (userInfo) => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({ user: userInfo})
    })
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("token", data.jwt)
      this.setState({ user: data.user }, () => this.props.history.push("/"))
  })
}

logOutHandler = () => {
  localStorage.removeItem("token");
  this.props.history.push("/login");
  this.setState({ user: null });
};


  render () {
    return (
      <>
      <NavBar user={this.state.user} clickHandler={this.logOutHandler} />
        
          
        <Switch>
          <Route path='/signup' render={() => <Signup user={this.state.user} submitHandler={this.signUpHandler}/>} />
          <Route path='/login' render={() => <Login user={this.state.user} submitHandler={this.loginHandler} /> } />
          <Route path='/organisms' render={() => <OrganismsContainer user={this.state.user} /> } />
          <Route path='/sightings' render={() => <SightingsContainer user={this.state.user} /> } />
          <Route path='/comments' render={() => <CommentsContainer user={this.state.user} />} />
          <Route path='/profile' render={() => <Profile user={this.state.user} />} />
          <Route path ='/' render={() =>(
            <div>
              <h1>Welcome to NatureBook!</h1>
              
              <GoogleMaps />
            </div>
          )}
          />
         

        </Switch>
      </>
    )
  }
}

export default withRouter(App);