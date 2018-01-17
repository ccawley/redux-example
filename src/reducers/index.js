import { combineReducers } from 'redux'

import {  FETCH_ROLLER_COASTERS_SUCCESS,
          UPDATE_ROW,
          PUT_ROLLER_COASTER_STARTED } from '../actions'

function roller_coasters(state = [], action){
  switch (action.type) {
    case FETCH_ROLLER_COASTERS_SUCCESS:
      return [...action.payload]
    default:
      return state
  }
}

function row_to_update(state = null, action){
  switch(action.type){
    case UPDATE_ROW:
      return action.payload || null
    default:
      return state
  }
}

export default combineReducers({
  roller_coasters,
  row_to_update
})
