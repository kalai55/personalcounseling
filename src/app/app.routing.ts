import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { NotificationsComponent } from './notifications/notifications.component';
import {ChatcompoentComponent} from './chatcompoent/chatcompoent.component';
import {ImageanalyzeComponent} from './imageanalyze/imageanalyze.component';
import {FaceanalyzeComponent} from './faceanalyze/faceanalyze.component';

const routes: Routes = [
    // { path: 'dashboard',      component: DashboardComponent },
    { path: 'chatbot',      component: ChatcompoentComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'image-analyze',   component: ImageanalyzeComponent },
    { path: 'face-analyze',   component: FaceanalyzeComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: '',               redirectTo: 'chatbot', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
