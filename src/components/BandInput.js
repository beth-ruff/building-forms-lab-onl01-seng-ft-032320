// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {

    state = {
      name: "",
    }

  handleChange = event => {
    console.log(event.target.value)
    // const { value, name } = event.target
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state.name)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add a Band</label>
            <input type="text" onChange={this.handleChange} value={this.state.name} name="name"/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput;
