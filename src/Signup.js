import React from 'react'


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
                <input type="text" name="firstname" placeholder="Enter Your First Name" value={this.state.firstname} onChange={this.changeHandler} />
                <br/>
                <input type="text" name="lastname" placeholder="Enter Your Last Name" value={this.state.lastname} onChange={this.changeHandler} />
                <br/>
                <input type="text" name="username" placeholder="Enter A Username" value={this.state.username} onChange={this.changeHandler} />
                <br/>
                <input type="text" name="password" placeholder="Enter a Password" value={this.state.password} onChange={this.changeHandler} />
                <br/>
                <input type="text" name="pic" placeholder="Enter a Url for a profile pic" value={this.state.pic} onChange={this.changeHandler} />
                <br/>
                <input type="submit" name="submit" value="Create Your Profile!" />

            </form>
        )
    }
}

export default Signup