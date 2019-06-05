import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtricleComponent } from './atricle/atricle.component';
import { CategoryComponent } from './category/category.component';
import { ClientComponent } from './client/client.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {path: '', redirectTo: '', pathMatch: 'full'},

  {path: 'article', component: AtricleComponent, pathMatch: 'full'},
  {path: 'category', component: CategoryComponent, pathMatch: 'full'},
  {path: 'client', component: ClientComponent, pathMatch: 'full'},
  {path: '**' , component: PageNotFoundComponent , pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
