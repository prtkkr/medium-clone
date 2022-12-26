import { PopularTagType } from 'src/app/shared/types/popularTags.type'

export interface PopularTagsStateInterface {
  data: PopularTagType[] | null
  isLoaded: boolean
  error: string | null
}
