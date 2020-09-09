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
            <>
            <div style={{ width:'600px', marginTop:'20px'}}>
            <h3><a target="_blank" href="https://speciesclassification.westus2.cloudapp.azure.com/">Link to Microsoft Species Classification Resource</a></h3>
            <br/>
            <form onSubmit={this.submitHandler}>
                <h1>What Organism Do You Want to Add?</h1>
                
                <br/>
                {/* <TextField id="outlined-basic" label="Enter The Organism's Category" variant="outlined" name="category" value={this.state.category} onChange={this.changeHandler} /> */}
                <>
                <select
                name = 'category'
                onChange={ (e) => 
                this.setState (
                    {
                       category: e.target.value,
                },
                console.log(e.target.value)
                )
            }>
                <option value='' disabled selected hidden>
                    Choose a category to which this organism belongs:
                </option>
               <option name='Amphibian' value='Amphibian'>Amphibian</option>
               <option name='Reptile' value='Reptile'>Reptile</option>
               <option name='Mammal' value='Mammal'>Mammal</option>
               <option name='Bird' value='Bird'>Bird</option>
               <option name='Insect' value='Insect'>Insect</option>
            </select>
                 </>           
                <br/>
                <br/>
                <TextField label="Enter The Organism's Common Name" style={{ margin: 20 }} fullWidth margin="normal" InputLabelProps={{ shrink: true }} name="common_name" value={this.state.common_name} onChange={this.changeHandler} />
                <br/>
                <TextField label="Enter The Organism's Scientific Name" style={{ margin: 20 }} fullWidth margin="normal" InputLabelProps={{ shrink: true }} name="scientific_name"  value={this.state.scientific_name} onChange={this.changeHandler} />
                <br/>
                <TextField label="Enter an Image Url" style={{ margin: 20 }} fullWidth margin="normal" InputLabelProps={{ shrink: true }} name="image"  value={this.state.image} onChange={this.changeHandler} />
                <br/>
                <Button variant='contained' color='primary' type="submit" name="submit" value="Create Your Organism!">Create Your Organism!</Button>

            </form>
            </div>
            <br/>
            <div className="create-organism">

            </div>
            </>
        )
    }
}

export default CreateOrganism