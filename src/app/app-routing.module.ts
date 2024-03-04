import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeventcomponentComponent } from './components/addeventcomponent/addeventcomponent.component';
import { HomecomponentComponent } from './components/homecomponent/homecomponent.component';
import { ListComponent } from './components/list/list.component';
//localhost:4200
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'eventlist', component:  ListComponent},
  { path: 'add', component:  AddeventcomponentComponent},
  {path:'home',component:HomecomponentComponent},
  {path:'login',component:HomecomponentComponent},
  {path:'register',component:HomecomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
