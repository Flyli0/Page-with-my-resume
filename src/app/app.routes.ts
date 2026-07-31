import { Routes } from '@angular/router';
import {Main} from './main/main';
import {About} from './main/about/about';

export const routes: Routes = [
  {path:"main", component:Main, title:'Main page'},
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"about", component:About, title:"About me"}
];
