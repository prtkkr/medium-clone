import {Action, createReducer, on} from '@ngrx/store'
import {AuthStateInterface} from 'src/app/auth/types/authState.interface'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from 'src/app/auth/store/actions/register.actions'

const initialState: AuthStateInterface = {
  isSubmitted: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitted: true,
      validationErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitted: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitted: false,
      validationErrors: action.errors,
    })
  )
)

/* authReducer will be called only during JIT compilation and not during AOT so,
    we have to create a new function that will return above function*/

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
