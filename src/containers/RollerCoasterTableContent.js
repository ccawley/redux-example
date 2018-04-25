import React, { Component } from 'react'
import { connect } from 'react-redux'

import RollerCoasterTableContentRowData from './RollerCoasterTableContentRowData'
import RollerCoasterTableContentUpdate from './RollerCoasterTableContentUpdate'

class RollerCoasterTableBody extends Component{
  constructor(props){
    super(props)

    this.state = {
      rowBeingEdited: null
    }
  }

  rowToEdit = (rowBeingEdited) => {
    this.setState({ rowBeingEdited })
  }

  render = () => {
    return (
      <tbody>
        {
          this.props.rollerCoasters.map((rollerCoaster,i) =>
          this.state.rowBeingEdited === rollerCoaster.id ?
          <RollerCoasterTableContentUpdate
            key={i}
            rowToEdit={this.rowToEdit}
            rollerCoaster={rollerCoaster}
            updateRollerCoaster={this.props.updateRollerCoaster} /> :
          <RollerCoasterTableContentRowData
            key={i}
            rowToEdit={this.rowToEdit}
            deleteRollerCoaster={this.props.deleteRollerCoaster}
            rollerCoaster={rollerCoaster} />
          )
        }
      </tbody>
    )
  }
}

export default RollerCoasterTableBody
