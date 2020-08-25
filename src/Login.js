import React from 'react'

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
                <input type="text" name="username" placeholder="Enter A Username" value={this.state.username} onChange={this.changeHandler} />
                <br/>
                <input type="text" name="password" placeholder="Enter a Password" value={this.state.password} onChange={this.changeHandler} />
                <br/>
                <input type="submit" name="submit" value="Login" />
            </form>
        )
    }
}

export default Login