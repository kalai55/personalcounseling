import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import {ChatcompoentComponent} from './chatcompoent.component';
import {ChatComponentsRoutes} from './chatcomponent.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ChatComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
  ],
  declarations: [
    ChatcompoentComponent
  ]
})

export class ChatComponentModule {}
