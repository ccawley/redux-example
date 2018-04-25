import React, { Component } from 'react'
import RollerCoasterTableHeader from './RollerCoasterTableHeader'
import RollerCoasterTableContent from '../containers/RollerCoasterTableContent'
import RollerCoasterTableAddContent from '../containers/RollerCoasterTableAddContent'


class RollerCoasterTable extends Component {
  constructor(props){
    super(props)
    this.state = {
      rollerCoasters: []
    }
  }

  addRollerCoaster = (coaster) => {
    this.setState({rollerCoasters: [ ...this.state.rollerCoasters, {...coaster, id: this.state.rollerCoasters.length + 1} ]})
  }

  deleteRollerCoaster = (rollerCoaster) => {
    const newRollerCoasters = this.state.rollerCoasters.filter(ele => ele.id !== rollerCoaster.id )
    this.setState({ rollerCoasters: newRollerCoasters })
  }

  updateRollerCoaster = (rollerCoaster) => {
    console.log(rollerCoaster)
    const newRollerCoasters = this.state.rollerCoasters.map(ele => ele.id === rollerCoaster.id ? rollerCoaster : ele )
    this.setState({ rollerCoasters: newRollerCoasters })
  }

  render(){
    return (
      <table className="table table-sm">
        <RollerCoasterTableHeader />
        <RollerCoasterTableAddContent
          addRollerCoaster={this.addRollerCoaster}/>
        <RollerCoasterTableContent
          rollerCoasters={this.state.rollerCoasters}
          deleteRollerCoaster={this.deleteRollerCoaster}
          updateRollerCoaster={this.updateRollerCoaster} />
      </table>

    )
  }
}


export default RollerCoasterTable
