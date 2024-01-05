import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Ingredient } from 'shared/models/ingredient.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartResolver implements Resolve<Ingredient[]> {

  constructor(private cartService: ShoppingListService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ingredient[]> | Promise<Ingredient[]> | Ingredient[] {
    return this.cartService.getAll();
  }
}
