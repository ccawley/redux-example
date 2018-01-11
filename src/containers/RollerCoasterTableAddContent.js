import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addRollerCoaster } from '../actions'

class RollerCoasterTableAddContent extends Component{

  constructor(props){
    super(props)

    this.state = { name:'', park:'', city:'', state:'' }
    this.handleChange = this.handleChange.bind(this)
    this.handleNewRollerCoaster = this.handleNewRollerCoaster.bind(this)
  }

  handleChange(event){
    const {target: {name, value} } = event

    if(this.state.hasOwnProperty(name)){
      this.setState( { [name]: value } )
    }
  }

  handleNewRollerCoaster(){
    // handle validation here
    this.props.addRollerCoaster(this.state)
    this.setState({ name:'', park:'', city:'', state:'' })
  }

  render(){
    return (
      <tbody>
        <tr>
          <td></td>
          <td>
            <input name='name' value={this.state.name} onChange={this.handleChange} type='text' />
          </td>
          <td>
            <input name='park' value={this.state.park} onChange={this.handleChange} type='text' />
          </td>
          <td>
            <input name='city' value={this.state.city} onChange={this.handleChange} type='text' />
          </td>
          <td>
            <input name='state' value={this.state.state} onChange={this.handleChange} type='text' />
          </td>
          <td colSpan='2'>
            <button
              onClick={ this.handleNewRollerCoaster }
              className='btn btn-primary btn-block'>
              Add Rollercoaster
            </button>
          </td>
        </tr>
      </tbody>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addRollerCoaster}, dispatch)
}

export default connect(null,mapDispatchToProps)(RollerCoasterTableAddContent)
