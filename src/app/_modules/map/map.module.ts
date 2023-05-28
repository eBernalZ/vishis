import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    NzSelectModule,
    NzInputModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzIconModule,
    TranslocoModule,
    NzModalModule,
    NzRadioModule,
    NzDividerModule
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
