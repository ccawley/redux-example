export const FETCH_ROLLER_COASTERS_STARTED = 'FETCH_ROLLER_COASTERS_STARTED'
export const FETCH_ROLLER_COASTERS_SUCCESS = 'FETCH_ROLLER_COASTERS_SUCCESS'
export const FETCH_ROLLER_COASTERS_ERROR = 'FETCH_ROLLER_COASTERS_ERROR'
export const ADD_ROLLER_COASTER = 'ADD_ROLLER_COASTER'
export const DELETE_ROLLER_COASTER = 'DELETE_ROLLER_COASTER'
export const UPDATE_ROLLER_COASTER = 'UPDATE_ROLLER_COASTER'
export const UPDATE_ROW = 'UPDATE_ROW'

export function getRollerCoasters(){
  return async (dispatch) => {
    dispatch({ type: FETCH_ROLLER_COASTERS_STARTED })
    const res = await request('/api/rollerCoasters')
    if(!res.ok){
      dispatch({type: FETCH_ROLLER_COASTERS_ERROR, payload: 'Could not fetch coasters'})
    }
    else{
      const json = await res.json()

      dispatch({
        type: FETCH_ROLLER_COASTERS_SUCCESS,
        payload: json.roller_coasters
      })
    }
  }
}

export function addRollerCoaster(coaster){
  return async (dispatch) => {
    const res = await request('/api/rollerCoasters', 'POST', coaster)
    if(!res.ok){
      console.log('Bad Request')
      // dispatch error
    }
    else {
      dispatch(getRollerCoasters());
    }
  }
}

export function deleteRollerCoaster(coasterId){
  return async (dispatch) => {
    const res = await request(`/api/rollerCoasters/${coasterId}`, 'DELETE')
    if(!res.ok){
      console.log('Bad Request')
      // dispatch error
    }
    else {
      dispatch(getRollerCoasters());
    }
  }
}

export function updateRollerCoaster(coaster){
  return async (dispatch) => {
    const res = await request(`/api/rollerCoasters/${coaster.id}`, 'PUT', coaster)
    if(!res.ok){
      console.log('Bad Request')
      // dispatch error
    }
    else {
      dispatch(updateRow(null))
      dispatch(getRollerCoasters());
    }
  }
}

export function updateRow(coasterId){
  return {
    type: UPDATE_ROW,
    payload: coasterId
  }
}

// --------------

async function request(path, method = 'GET', body = null) {
  if (body) body = JSON.stringify(body)
  return await fetch(`${process.env.REACT_APP_API_URL}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: body
  })
}
