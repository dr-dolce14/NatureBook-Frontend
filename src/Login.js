import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'


class Login extends React.Component {

    state = {
        username: "",
        password: ""

    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
        this.setState({
            username: "",
            password: ""
        })
    }

    render() {

        return (
            <form onSubmit={this.submitHandler}>
                <h1>Login</h1>
                <TextField id="outlined-basic" label="Enter Your Username" variant="outlined" name="username" placeholder="Enter A Username" value={this.state.username} onChange={this.changeHandler} />
                <br/>
                <TextField id="outlined-basic" label="Enter Your Password" variant="outlined" name="password" placeholder="Enter a Password" value={this.state.password} onChange={this.changeHandler} />
                <br/>
                <Button variant='contained' color='primary' type="submit" name="submit" value="Login">Log In</Button> 
            </form>
        )
    }
}

export default Login