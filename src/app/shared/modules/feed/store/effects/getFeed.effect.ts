import { Injectable } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import {
  getFeedAction,
  getFeedActionSuccess,
  getFeedFailureAction,
} from '../actions/getFeed.action'
import { GetFeedResponsenterface } from 'src/app/shared/modules/feed/types/getFeedResponse.interface'
import { FeedService } from 'src/app/shared/modules/feed/services/feed.service'

@Injectable()
export class GetFeedEffect {
  constructor(private actions$: Actions, private feedService: FeedService) {}

  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponsenterface) => {
            return getFeedActionSuccess({ feed })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getFeedFailureAction())
          })
        )
      })
    )
  )
}
