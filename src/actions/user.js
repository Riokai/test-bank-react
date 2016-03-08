import * as types from '../constants'

export function login(name, password) {
  return { type: types.LOGIN, name, password }
}
