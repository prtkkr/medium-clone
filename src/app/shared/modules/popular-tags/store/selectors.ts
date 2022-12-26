import { createSelector } from '@ngrx/store'
import { AppStateInterface } from 'src/app/shared/types/appState.interface'
import { PopularTagsStateInterface } from '../types/popularTagsState.interface'

// creating feature selector
export const popularTagsFeatureSelector = (
  state: AppStateInterface
): PopularTagsStateInterface => state.popularTags

export const popularTagsSelector = createSelector(
    popularTagsFeatureSelector,
    (popularTagsState: PopularTagsStateInterface) => popularTagsState.data
)

export const isLoadedSelector = createSelector(
    popularTagsFeatureSelector,
    (popularTagsState: PopularTagsStateInterface) => popularTagsState.isLoaded
)

export const errorSelector = createSelector(
    popularTagsFeatureSelector,
    (popularTagsState: PopularTagsStateInterface) => popularTagsState.error
)