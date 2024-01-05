import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { HomeComponent } from './home/home.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CartResolver } from './shopping-list/cart-resolver.service';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent, children: [
      { path: ':slug', component: RecipeDetailComponent },
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent, resolve: { cart: CartResolver }, children: [
      { path: ':name', component: ShoppingEditComponent }
    ]
  },
  { path: 'not-found', component: NotFoundComponent, data: { message: 'NO SUCH PAGE' } },
  { path: '**', redirectTo: 'not-found' }
];
