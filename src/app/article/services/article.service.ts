import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  delete(slug: string): Observable<{}> {
    const url = `${environment.apiURL}/articles/${slug}`
    return this.http.delete<{}>(url)
  }
}
