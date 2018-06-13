import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Exercise4Component} from './exercise4/exercise4.component';
import {Exercise3Component} from './exercise3/exercise3.component';
import {Exercise2Component} from './exercise2/exercise2.component';
import {Exercise1Component} from './exercise1/exercise1.component';

export const routerConfig: Routes = [
  {
    path: 'exercise1',
    component: Exercise1Component
  },
  {
    path: 'exercise2',
    component: Exercise2Component
  },
  {
    path: 'exercise3',
    component: Exercise3Component
  },
  {
    path: 'exercise4',
    component: Exercise4Component
  },
  {
    path: '',
    redirectTo: '/exercise1',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/exercise1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routerConfig)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
