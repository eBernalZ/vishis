import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, Validators, UntypedFormBuilder } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm!: UntypedFormGroup;
  loginloading = false;

  constructor(
    private fb: UntypedFormBuilder,
    private translocoService: TranslocoService
  ) { }

  ngOnInit(): void {
    this.translocoService.setActiveLang('es');
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  login(): void {
    this.loginloading = true;
    if (this.loginForm.valid) {
      console.log('submit', this.loginForm.value);
      // this.loginloading = false;
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
          this.loginloading = false;
        }
      });
    }
  }
}