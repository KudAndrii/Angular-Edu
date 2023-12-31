import { Component } from '@angular/core';
import { RecipesService } from 'shared/services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipesService]
})
export class RecipesComponent {
}
