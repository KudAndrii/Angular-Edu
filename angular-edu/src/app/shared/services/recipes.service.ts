import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      'pasta',
      'tasty pasta',
      'https://realfood.tesco.com/media/images/1400x919-tomato-pasta-6a5a3c8e-f111-490d-805c-9b62fbec8691-0-1400x919.jpg',
      [ new Ingredient('bred', 10), new Ingredient('cheese', 5) ]
    ),
    new Recipe(
      'soup',
      'tasty soup',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPTzmmXoxK62yXgIniSM73xP7numbFwKMZDcGge2tYwBaZ_g4vm10DcjJSY-dQkAlt5Fo&usqp=CAU',
      [ new Ingredient('bred', 5), new Ingredient('potato', 5) ]
    )
  ];

  getAll() {
    return this.recipes.slice();
  }

  findOne(slug: string): Recipe | null {
    const resultIndex = this.recipes.findIndex(x => x.slug === slug);
    if (resultIndex === -1) return null;
    return <Readonly<Recipe>>this.recipes[resultIndex];
  }
}
