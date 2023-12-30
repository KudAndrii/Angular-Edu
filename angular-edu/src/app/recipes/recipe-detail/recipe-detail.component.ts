import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import { RecipesService } from '../../shared/services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  recipe?: Recipe;

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipe = this.recipesService.getActiveRecipe();
    this.recipesService.activeRecipeUpdated.subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });
  }
}
