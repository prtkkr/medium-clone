import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class PersistanceService {
  constructor() {}

  set(key: string, data: any) {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
      console.error('Error saving to local storage', e)
    }
  }

  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (error) {
      console.error('Error getting data from local storage', error)
      return null
    }
  }
}