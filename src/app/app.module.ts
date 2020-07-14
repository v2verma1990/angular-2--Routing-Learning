import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([
    {path: 'crisis-list', component: CrisisListComponent},
    
    {path: 'heroes-list', component: HeroesListComponent},
     {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent},
  ]), ],
  declarations: [ AppComponent, HelloComponent, CrisisListComponent, HeroesListComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
