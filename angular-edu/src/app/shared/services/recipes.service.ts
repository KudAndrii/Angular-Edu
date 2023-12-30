import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable()
export class RecipesService {
  recipes: Recipe[] = [
    new Recipe('pasta', 'tasty pasta', 'https://realfood.tesco.com/media/images/1400x919-tomato-pasta-6a5a3c8e-f111-490d-805c-9b62fbec8691-0-1400x919.jpg'),
    new Recipe('soup', 'tasty soup', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPTzmmXoxK62yXgIniSM73xP7numbFwKMZDcGge2tYwBaZ_g4vm10DcjJSY-dQkAlt5Fo&usqp=CAU')
  ];
  private activeRecipe?: Recipe;
  activeRecipeUpdated = new EventEmitter<Recipe>();

  getActiveRecipe() {
    return this.activeRecipe ? this.activeRecipe : this.recipes[0];
  }

  setActiveRecipe(recipe: Recipe) {
    this.activeRecipe = recipe;
    this.activeRecipeUpdated.emit(this.activeRecipe);
  }
}
