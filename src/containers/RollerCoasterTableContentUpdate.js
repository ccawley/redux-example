import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { updateRow, updateRollerCoaster } from '../actions'

class RollerCoasterTableUpdateContent extends Component{

  constructor(props){
    super(props)
    console.log(props)
    const { id, name, park, city, state } = this.props.rollerCoaster

    this.state = { id, name, park, city, state }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {target: {name, value} } = event

    if(this.state.hasOwnProperty(name)){
      this.setState( { [name]:value } )
    }
  }

  updateRollerCoaster = (rollerCoaster) => {
    this.props.updateRollerCoaster(rollerCoaster)
    this.props.rowToEdit(null)
  }

  render(){
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>
          <input
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            type='text' />
        </td>
        <td>
          <input
            name='park'
            value={this.state.park}
            onChange={this.handleChange}
            type='text' />
        </td>
        <td>
          <input
            name='city'
            value={this.state.city}
            onChange={this.handleChange}
            type='text' />
        </td>
        <td>
          <input
            name='state'
            value={this.state.state}
            onChange={this.handleChange}
            type='text' />
        </td>
        <td>
          <button
            onClick={ () => this.updateRollerCoaster(this.state) }
            className='btn btn-primary btn-block'>
            Update
          </button>
        </td>
        <td>
          <button
            onClick={ () => this.props.rowToEdit(null) }
            className='btn btn-danger btn-block'>
            Cancel
          </button>
        </td>
      </tr>
    )
  }
}

export default RollerCoasterTableUpdateContent
