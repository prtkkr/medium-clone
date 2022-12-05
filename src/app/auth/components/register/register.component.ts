import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AppStateInterface } from 'src/app/shared/types/appState.interface'

import { registerAction } from '../../store/actions'
import { isSubmittedSelector } from '../../store/selectors'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup
  isSubmitted$!: Observable<boolean>

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  initializeValues(): void {
    this.isSubmitted$ = this.store.pipe(select(isSubmittedSelector))
    console.log(this.isSubmitted$)
  }

  onSubmit(): void {
    console.log('submit', this.form.value, this.form.valid)
    this.store.dispatch(registerAction(this.form.value))
  }
}
