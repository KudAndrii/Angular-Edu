import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @Input() ingredient: Ingredient;
  @Output('on-add') addIngredientEmit = new EventEmitter<Ingredient>();

  addIngredient() {
    this.addIngredientEmit.emit(this.ingredient);
  }
}
