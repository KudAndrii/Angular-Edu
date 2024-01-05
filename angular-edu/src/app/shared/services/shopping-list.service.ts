import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
private ingredients: Ingredient[] = [
  new Ingredient('Apples', 5),
  new Ingredient("Potato", 10)
];
  constructor() { }

  async getAll(): Promise<Ingredient[]> {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return this.ingredients.slice();
  }

  findOne(name: string): Ingredient | null {
    const resultIndex = this.ingredients.findIndex(x => x.name === name);
    if (resultIndex === -1) return null;
    return <Readonly<Ingredient>>this.ingredients[resultIndex];
  }
}
