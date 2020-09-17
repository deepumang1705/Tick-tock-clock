import React, { Component } from 'react' 

class NameForm extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        }
    
    handleSubmit(Name) {
        alert('A name was submitted: ' + this.state.value);
        Name.preventDefault();
    }    

    
    render() {
        return(
                <form onSubmit={this.handleSubmit}>
                    <label>
                        NAME :
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
        );
    }
}

export default NameForm

