import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { GetComponent } from './get/get.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    GetComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes) //serve per importare tutte le routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }