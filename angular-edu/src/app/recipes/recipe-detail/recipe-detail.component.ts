import { Component, DoCheck, OnInit } from '@angular/core';

import { Recipe } from 'shared/models/recipe.model';
import { RecipesService } from 'shared/services/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit, DoCheck {
  recipe?: Recipe;

  constructor(private route: ActivatedRoute, private recipesService: RecipesService, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(async params => {
      this.recipe = this.recipesService.findOne(params['slug']);
    });
  }

  async ngDoCheck() {
    if (this.recipe === null) {
      console.warn('redirection from not found recipe');
      await this.router.navigate(['../'], { relativeTo: this.route });
    }
  }
}
