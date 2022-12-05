import { Action, createReducer, on } from '@ngrx/store'
import { AuthStateInterface } from 'src/app/auth/types/authState.interface'
import { registerAction } from 'src/app/auth/store/actions'

const initialState: AuthStateInterface = {
  isSubmitted: false,
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitted: true,
    })
  )
)

/* authReducer will be called only during JIT compilation and not during AOT so,
    we have to create a new function that will return above function*/

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
