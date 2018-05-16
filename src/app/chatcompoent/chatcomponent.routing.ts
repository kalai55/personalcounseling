import { Routes } from '@angular/router';
import {ChatcompoentComponent} from './chatcompoent.component';

export const ChatComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'chatbot',
        component: ChatcompoentComponent,
      }
    ]
  }
];
