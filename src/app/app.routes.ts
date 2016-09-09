import {Routes, RouterModule} from '@angular/router';
import Tags from './components/tags.component';
import Albums from './components/albums.component';

export const ROUTES: Routes = [
  {path: '', component: Albums},
  {path: 'tags', component: Tags},
  {path: 'album', component: Albums},
];
