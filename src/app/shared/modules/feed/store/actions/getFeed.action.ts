import { createAction, props } from '@ngrx/store'

import { GetFeedResponsenterface } from 'src/app/shared/modules/feed/types/getFeedResponse.interface'
import { ActionTypes } from 'src/app/shared/modules/feed/store/actionTypes'

export const getFeedAction = createAction(
  ActionTypes.GET_FEED,
  props<{ url: string }>()
)

export const getFeedActionSuccess = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{ feed: GetFeedResponsenterface }>()
)

export const getFeedFailureAction = createAction(ActionTypes.GET_FEED_FAILURE)
