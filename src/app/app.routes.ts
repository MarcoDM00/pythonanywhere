import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GetComponent } from './get/get.component';
import { PostComponent } from './post/post.component';

export const AppRoutes: Routes = [
  { path: '', component: GetComponent }, //specifico un percorso e il componente a cui assegno tale percorso
  { path: 'post', component: PostComponent } //specifico un percorso con anche un dato. Se non è presente il dato, il percorso non si attiva
];