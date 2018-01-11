import { combineReducers } from 'redux'
import _ from 'lodash'

import {  ADD_ROLLER_COASTER,
          DELETE_ROLLER_COASTER,
          UPDATE_ROW,
          UPDATE_ROLLER_COASTER } from '../actions'

const INITIAL_STATE = [
  { id: 1, name: 'Lightning Rod', park: 'Dollywood', city: 'Pigeon Forge', state: 'Tennessee' },
  { id: 2, name: 'Goliath', park: 'Six Flags Magic Mountain', city: 'Valencia', state: 'California' },
  { id: 3, name: 'Millennium Force', park: 'Cedar Point', city: 'Sandusky', state: 'Ohio' },
  { id: 4, name: 'Leap-The-Dips', park: 'Lakemon Park', city: 'Altoona', state: 'Pennsylvania' },
  { id: 5, name: 'Fury 325', park: 'Carowinds', city: 'Charlotte', state: 'North Carolina' }
]

function roller_coasters(state = INITIAL_STATE, action){
  switch (action.type) {
    case ADD_ROLLER_COASTER:
      const sorted_coasters = state.sort((a,b) => a.id-b.id)
      const id = state.length > 0 ? sorted_coasters[state.length-1].id + 1 : 1
      const coaster = {id, ...action.payload}
      return [..._.cloneDeep(state), coaster]

    case UPDATE_ROLLER_COASTER:
      return [...state.map((e,i) => {
        if(e.id === action.payload.id) return action.payload
        return { ...e }
      })]

    case DELETE_ROLLER_COASTER:
      return [..._.cloneDeep(state).filter(e => e.id !== action.payload)]
      
    default:
      return state
  }
}

function row_to_update(state = null, action){
  switch(action.type){
    case UPDATE_ROLLER_COASTER:
    case UPDATE_ROW:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  roller_coasters,
  row_to_update
})
