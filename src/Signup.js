import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'


class Signup extends React.Component {

    state = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        pic: ""
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
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            pic: ""
        })
    }

    render() {

        return (
            <form onSubmit={this.submitHandler}>
                <h1>Sign up here!</h1>
                <TextField id="outlined-basic" label="Enter Your First Name" variant="outlined" name="firstname" placeholder="Enter Your First Name" value={this.state.firstname} onChange={this.changeHandler} />
                <br/>
                <TextField id="outlined-basic" label="Enter Your Last Name" variant="outlined" name="lastname" placeholder="Enter Your Last Name" value={this.state.lastname} onChange={this.changeHandler} />
                <br/>
                <TextField id="outlined-basic" label="Enter A Username" variant="outlined" name="username" placeholder="Enter A Username" value={this.state.username} onChange={this.changeHandler} />
                <br/>
                <TextField id="outlined-basic" label="Enter A Password" variant="outlined" name="password" placeholder="Enter a Password" value={this.state.password} onChange={this.changeHandler} />
                <br/>
                <TextField id="outlined-basic" label="Profile Pic url" variant="outlined" name="pic" placeholder="Enter a Url for a profile pic" value={this.state.pic} onChange={this.changeHandler} />
                <br/>
                <Button variant='contained' color='primary' type="submit" name="submit" value="Create Your Profile!">Create Your Profile!</Button>

            </form>
        )
    }
}

export default Signup