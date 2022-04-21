import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { EditInfoComponent } from './edit-info/edit-info.component';
import { ReactiveFormsModule } from '@angular/forms';
const appRoutes : Routes = [
  {
    path: '', component: NewsComponent
  },
  {
    path: 'edit/:titre', component: EditInfoComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NavbarComponent,
    EditInfoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
