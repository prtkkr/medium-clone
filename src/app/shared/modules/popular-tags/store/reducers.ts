import { Action, createReducer, on } from '@ngrx/store'

import { PopularTagsStateInterface } from 'src/app/shared/modules/popular-tags/types/popularTagsState.interface'
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from 'src/app/shared/modules/popular-tags/store/actions/getPopularTags.action'

const initialState: PopularTagsStateInterface = {
  data: null,
  isLoaded: false,
  error: null,
}

const popularTagsReducer = createReducer(
  initialState,
  on(getPopularTagsAction, (state: PopularTagsStateInterface) => ({
    ...state,
    isLoaded: true,
  })),
  on(
    getPopularTagsSuccessAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoaded: false,
      data: action.popularTags,
    })
  ),
  on(getPopularTagsFailureAction, (state: PopularTagsStateInterface) => ({
    ...state,
    isLoaded: false,
  }))
)

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action)
}
