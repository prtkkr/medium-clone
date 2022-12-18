import { Action, createReducer, on } from '@ngrx/store'

import { FeedStateInterface } from 'src/app/shared/modules/feed/types/feedState.interface'
import {
  getFeedAction,
  getFeedActionSuccess,
  getFeedFailureAction,
} from 'src/app/shared/modules/feed/store/actions/getFeed.action'

const initialState: FeedStateInterface = {
  data: null,
  error: null,
  isLoading: false,
}

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedActionSuccess,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
)

export function reducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action)
}
