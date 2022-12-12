import {createSelector} from '@ngrx/store'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'
import {AuthStateInterface} from '../types/authState.interface'

// creating feature selector
export const authFeatureSelector = (
  state: AppStateInterface
): AuthStateInterface => state.auth

export const isSubmittedSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitted
)

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
)
