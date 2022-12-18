import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetFeedResponsenterface } from '../types/getFeedResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<GetFeedResponsenterface> {
    const fullUrl = environment.apiURL + url
    return this.http.get<GetFeedResponsenterface>(fullUrl)
  }
}
