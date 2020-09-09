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
            <>
            <div style={{ width:'600px', marginTop:'20px'}}>
            <form onSubmit={this.submitHandler}>
                <h1>Sign up here!</h1>
                <TextField label="Enter Your First Name" style={{ margin: 20 }} fullWidth margin="normal" InputLabelProps={{ shrink: true }} name="firstname" value={this.state.firstname} onChange={this.changeHandler} />
                <br/>
                <TextField label="Enter Your Last Name" style={{ margin: 20 }} fullWidth margin="normal" InputLabelProps={{ shrink: true }} name="lastname" value={this.state.lastname} onChange={this.changeHandler} />
                <br/>
                <TextField label="Enter A Username" style={{ margin: 20 }} fullWidth margin="normal" InputLabelProps={{ shrink: true }} name="username" value={this.state.username} onChange={this.changeHandler} />
                <br/>
                <TextField label="Enter A Password" style={{ margin: 20 }} fullWidth margin="normal" InputLabelProps={{ shrink: true }} name="password" value={this.state.password} type='password' onChange={this.changeHandler} />
                <br/>
                <TextField label="Profile Pic url" style={{ margin: 20 }} fullWidth margin="normal" InputLabelProps={{ shrink: true }} name="pic" value={this.state.pic} onChange={this.changeHandler} />
                <br/>
                <Button variant='contained' color='primary' type="submit" name="submit" value="Create Your Profile!">Create Your Profile!</Button>

            </form>
            </div>
            <br/>
            <div className="signup">

            </div>
            </>
        )
    }
}

export default Signup