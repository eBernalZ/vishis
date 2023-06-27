import { Component, OnInit} from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators, ValidationErrors } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Observable, Observer } from 'rxjs';

// i18n imports
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup!: UntypedFormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

  constructor(private fb: UntypedFormBuilder,
    public translocoService: TranslocoService,) {
      this.signup = this.fb.group({
        first_name: [null, [Validators.required]],
        last_name: [null, [Validators.required]],
        username: [null, [Validators.required]],
        email: [null, [Validators.email, Validators.required]],
        password: [null, [Validators.required]],
        password_confirmation: [null, [Validators.required, this.confirmationValidator]],
        agree: [false, [Validators.requiredTrue]]
      });
    }

  ngOnInit(): void {
    this.translocoService.setActiveLang('es');
  }

  submitForm(): void {
    if (this.signup.valid) {
      console.log('submit', this.signup.value);
    } else {
      Object.values(this.signup.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.signup.controls['checkPassword'].updateValueAndValidity());
  }

  confirmationValidator = (control: UntypedFormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.signup.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };
}
