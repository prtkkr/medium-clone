import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-loading',
  template: ` <div>Loading...</div> `,
  styles: [],
})
export class LoadingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
