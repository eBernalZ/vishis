// ANGULAR MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// I18N MODULES
import { TranslocoModule } from '@ngneat/transloco';

// NG ZORRO MODULES
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzMessageModule } from 'ng-zorro-antd/message';

// CUSTOM MODULES
import { MapRoutingModule } from './map-routing.module';
import { AuthModule } from '../auth/auth.module';

// COMPONENTS
import { MapComponent } from './map.component';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslocoModule,
    MapRoutingModule,
    NzSelectModule,
    NzInputModule,
    NzFormModule,
    FormsModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NzRadioModule,
    NzDividerModule,
    NzDrawerModule,
    NzCheckboxModule,
    NzMessageModule,
    AuthModule
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
