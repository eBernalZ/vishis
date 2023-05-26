import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';

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
    NzButtonModule
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
