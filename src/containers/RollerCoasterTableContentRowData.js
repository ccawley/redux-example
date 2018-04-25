import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRow, deleteRollerCoaster } from '../actions'

function RollerCoasterTableContentRowData(props){
  const { rollerCoaster, rowToEdit, deleteRollerCoaster } = props

  const { id, name, park, city, state } = rollerCoaster

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{park}</td>
      <td>{city}</td>
      <td>{state}</td>
      <td>
        <span
          onClick={() => rowToEdit(id)}
          className='btn btn-primary btn-block'>
          Edit
        </span>
      </td>
      <td>
        <span
          onClick={() => deleteRollerCoaster(rollerCoaster)}
          className='btn btn-danger btn-block'>
          Delete
        </span>
      </td>
    </tr>
  )
}



export default RollerCoasterTableContentRowData
