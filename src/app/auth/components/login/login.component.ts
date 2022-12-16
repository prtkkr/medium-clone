import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { AppStateInterface } from 'src/app/shared/types/appState.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { loginAction } from 'src/app/auth/store/actions/login.action'
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interface'
import {
  isSubmittedSelector,
  validationErrorsSelector,
} from 'src/app/auth/store/selectors'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup
  isSubmitted$!: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

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
      email: ['', Validators.required],
      password: ['', Validators.required],
      // username: ['', Validators.required],
    })
  }

  initializeValues(): void {
    this.isSubmitted$ = this.store.pipe(select(isSubmittedSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    // console.log(this.isSubmitted$)
  }

  onSubmit(): void {
    console.log('submit', this.form.value, this.form.valid)
    const request: LoginRequestInterface = {
      user: this.form.value,
    }
    this.store.dispatch(loginAction({ request }))
  }
}
