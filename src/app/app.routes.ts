import { Routes } from '@angular/router';
import {Main} from './main/main';
import {About} from './main/about/about';
import {Education} from './main/education/education';
import {Skills} from './main/skills/skills';
import {Projects} from './main/projects/projects';
import {Contacts} from './main/contacts/contacts';

export const routes: Routes = [
  {path:"main", component:Main, title:'Main page'},
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"about", component:About, title:"About me"},
  {path:"education", component:Education, title: "Education"},
  {path:"skills", component: Skills, title: "What can I do"},
  {path:"projects", component: Projects, title: "What have I done"},
  {path: "contacts", component: Contacts, title: "How to contact me"}
];
