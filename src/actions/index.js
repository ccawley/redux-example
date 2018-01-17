export const FETCH_ROLLER_COASTERS_STARTED = 'FETCH_ROLLER_COASTERS_STARTED'
export const FETCH_ROLLER_COASTERS_SUCCESS = 'FETCH_ROLLER_COASTERS_SUCCESS'
export const FETCH_ROLLER_COASTERS_ERROR = 'FETCH_ROLLER_COASTERS_ERROR'

export const POST_ROLLER_COASTER_STARTED = 'POST_ROLLER_COASTER_STARTED'
export const POST_ROLLER_COASTER_SUCCESS = 'POST_ROLLER_COASTER_STARTED'
export const POST_ROLLER_COASTER_ERROR = 'POST_ROLLER_COASTER_ERROR'

export const DELETE_ROLLER_COASTER_STARTED = 'DELETE_ROLLER_COASTER_STARTED'
export const DELETE_ROLLER_COASTER_SUCCESS = 'DELETE_ROLLER_COASTER_SUCCESS'
export const DELETE_ROLLER_COASTER_ERROR = 'DELETE_ROLLER_COASTER_ERROR'

export const PUT_ROLLER_COASTER_STARTED = 'PUT_ROLLER_COASTER_STARTED'
export const PUT_ROLLER_COASTER_SUCCESS = 'PUT_ROLLER_COASTER_SUCCESS'
export const PUT_ROLLER_COASTER_ERROR = 'PUT_ROLLER_COASTER_ERROR'


export const UPDATE_ROW = 'UPDATE_ROW'

export function getRollerCoasters(){
  return async (dispatch) => {
    dispatch({ type: FETCH_ROLLER_COASTERS_STARTED })
    const res = await request('/api/rollerCoasters')
    if(!res.ok){
      dispatch({type: FETCH_ROLLER_COASTERS_ERROR })
      // callback such that caller can define error behavior
    }
    else{
      const json = await res.json()

      dispatch({
        type: FETCH_ROLLER_COASTERS_SUCCESS,
        payload: json.roller_coasters.sort((a,b) => a.id - b.id)
      })
    }
  }
}

export function addRollerCoaster(coaster){
  return async (dispatch) => {
    dispatch({type: POST_ROLLER_COASTER_STARTED})
    const res = await request('/api/rollerCoasters', 'POST', coaster)
    if(!res.ok){
      console.log('Bad Request')
      dispatch({type: POST_ROLLER_COASTER_ERROR })
      // callback such that caller can define error behavior
    }
    else {
      dispatch({type: POST_ROLLER_COASTER_SUCCESS })
      dispatch(getRollerCoasters());
    }
  }
}

export function deleteRollerCoaster(coasterId){
  return async (dispatch) => {
    dispatch({type: DELETE_ROLLER_COASTER_STARTED })
    const res = await request(`/api/rollerCoasters/${coasterId}`, 'DELETE')
    if(!res.ok){
      console.log('Bad Request')
      dispatch({type: DELETE_ROLLER_COASTER_ERROR })
      // callback such that caller can define error behavior
    }
    else {
      dispatch({type: DELETE_ROLLER_COASTER_SUCCESS })
      dispatch(getRollerCoasters());
    }
  }
}

export function updateRollerCoaster(coaster){
  return async (dispatch) => {
    dispatch({type: PUT_ROLLER_COASTER_STARTED })
    const res = await request(`/api/rollerCoasters/${coaster.id}`, 'PUT', coaster)
    if(!res.ok){
      console.log('Bad Request')
      dispatch({type: PUT_ROLLER_COASTER_ERROR })
      // callback such that caller can define error behavior
    }
    else {
      dispatch({type: PUT_ROLLER_COASTER_SUCCESS })
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
