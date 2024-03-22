import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LookAndFeelRoutingModule } from './look-and-feel-routing.module';
import { SystemDesignComponent } from './system-design/system-design.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SystemDesignComponent
  ],
  imports: [
    CommonModule,
    LookAndFeelRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class LookAndFeelModule { }
