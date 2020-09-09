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
            <>
            
            <div style={{ width:'600px', marginTop:'20px'}}>
            <form onSubmit={this.submitHandler}>
                <h1>Login</h1>
                <TextField label="Enter Your Username" style={{ margin: 20 }} fullWidth margin="normal" InputLabelProps={{ shrink: true }} name="username"  value={this.state.username} onChange={this.changeHandler} />
                <br/>
                <TextField label="Enter Your Password" style={{ margin: 20 }} fullWidth margin="normal" InputLabelProps={{ shrink: true }} name="password"  type="password" value={this.state.password} onChange={this.changeHandler} />
                <br/>
                <Button variant='contained' color='primary' type="submit" name="submit" value="Login">Log In</Button> 
            </form>
            </div>
            <br/>
            <div className="login">

            </div>
            </>
        )
    }
}

export default Login