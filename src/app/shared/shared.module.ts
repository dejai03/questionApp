import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card'
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatFormFieldModule} from '@angular/material/form-field';

import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      NotifierModule.withConfig({
        position:{
          horizontal:{position:"right"},
          vertical:{position:"top"}
        },
        behaviour:{
          onClick:'hide'
        }
      }),
    MatSidenavModule,
    DragDropModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatMenuModule,
    MatRadioModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    NotifierModule,
    MatSidenavModule,
    DragDropModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDividerModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class SharedModule { }
