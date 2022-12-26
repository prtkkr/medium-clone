import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { AppStateInterface } from 'src/app/shared/types/appState.interface'
import { PopularTagType } from 'src/app/shared/types/popularTags.type'
import { getPopularTagsAction } from 'src/app/shared/modules/popular-tags/store/actions/getPopularTags.action'
import {
  errorSelector,
  isLoadedSelector,
  popularTagsSelector,
} from 'src/app/shared/modules/popular-tags/store/selectors'

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagType[] | null>
  isLoaded$: Observable<boolean>
  error$: Observable<string | null>

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.fetchData()
    this.initializeValues()
  }

  initializeValues() {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
    this.isLoaded$ = this.store.pipe(select(isLoadedSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  fetchData() {
    this.store.dispatch(getPopularTagsAction())
  }
}
