import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs'
import { ActivatedRoute, Params, Router } from '@angular/router'

import queryString from 'query-string'

import { environment } from 'src/environments/environment'
import { getFeedAction } from 'src/app/shared/modules/feed/store/actions/getFeed.action'
import { GetFeedResponsenterface } from 'src/app/shared/modules/feed/types/getFeedResponse.interface'
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from 'src/app/shared/modules/feed/store/selectors'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string

  feed$: Observable<GetFeedResponsenterface | null>
  error$: Observable<string | null>
  isLoading$: Observable<boolean>
  limit = environment.limit
  baseUrl: string
  currentPage: number
  queryParamsSubscription: Subscription

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
    // this.fetchData()
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (param: Params) => {
        this.currentPage = parseInt(param['page'] || '1')
        this.fetchFeed()
      }
    )
  }

  initializeValues(): void {
    this.feed$ = this.store.pipe(select(feedSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.select(errorSelector)
    this.baseUrl = this.router.url.split('?')[0]
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit

    const parsedUrl = queryString.parseUrl(this.apiUrlProps)
    console.log('parsedURL', parsedUrl, this.apiUrlProps)

    const stringifiedParams = queryString.stringify({
      limit: this.limit,
      offset: offset,
      ...parsedUrl.query,
    })

    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
    // this.store.dispatch(getFeedAction({ url: this.apiUrlProps }))
    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }))
  }
}
