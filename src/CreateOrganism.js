import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'


class CreateOrganism extends React.Component {

    state = {
        category: "",
        common_name: "",
        scientific_name: "",
        image: ""
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
            category: "",
            common_name: "",
            scientific_name: "",
            image: ""
        })
    }

    render() {

        return (
            <form onSubmit={this.submitHandler}>
                <h1>What Organism Do You Want to Create?</h1>
                <TextField id="outlined-basic" label="Enter The Organism's Category" variant="outlined" name="category" value={this.state.category} onChange={this.changeHandler} />
                <br/>
                <TextField id="outlined-basic" label="Enter The Organism's Common Name" variant="outlined" name="common_name" value={this.state.common_name} onChange={this.changeHandler} />
                <br/>
                <TextField id="outlined-basic" label="Enter The Organism's Scientific Name" variant="outlined" name="scientific_name"  value={this.state.scientific_name} onChange={this.changeHandler} />
                <br/>
                <TextField id="outlined-basic" label="Enter an Image Url" variant="outlined" name="image"  value={this.state.image} onChange={this.changeHandler} />
                <br/>
                <Button variant='contained' color='primary' type="submit" name="submit" value="Create Your Organism!">Create Your Organism!</Button>

            </form>
        )
    }
}

export default CreateOrganism