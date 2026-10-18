import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes';
import { RecipesListComponent } from './recipes-list/recipes-list';
// CORRECCIÓN 1: Cambiado a RecipesDetailsComponent (verifica que tu clase se llame así)
import { RecipesDetailsComponent } from './recipes-details/recipes-details';
import { HomeComponent } from './home/home';
import { ContactoComponent } from './contacto/contacto';
import { RECIPES_LIST_DATA } from './data/recipes-list-data';
import { RecipesDetailV2 } from './pages/recipes-detail-v2/recipes-detail-v2';
import { UsersList } from './pages/users-list/users-list';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes-list', component: RecipesListComponent },
  { path: 'recipes-details/:id', component: RecipesDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'recipes-details-v2', component: RecipesDetailV2 },
  { path: 'users-list', component: UsersList },
];
