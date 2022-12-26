import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'

import { environment } from 'src/environments/environment'
import { PopularTagType } from 'src/app/shared/types/popularTags.type'
import { PopularTagsResponseInterface } from 'src/app/shared/modules/popular-tags/types/popularTagsResponse.interface'

@Injectable({
  providedIn: 'root',
})
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiURL + '/tags'
    return this.http
      .get(url)
      .pipe(map((res: PopularTagsResponseInterface) => res.tags))
  }
}
