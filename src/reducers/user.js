import { createReducer } from '../utils'
import * as types from '../constants'

const initialState = { token: '' }

export default createReducer({
  [types.LOGIN]: (state, action) => {
    console.log('action', action);
    return state
  }
}, initialState)
