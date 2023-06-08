import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// COMPONENT IMPORTS
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

// NG ZORRO MODULES
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';

// CUSTOM MODULES
import { AuthRoutingModule } from './auth-routing.module';

// I18N MODULES
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzSelectModule,
    TranslocoModule
  ],
  exports: [
    SignupComponent,
    LoginComponent
  ]
})
export class AuthModule { }
