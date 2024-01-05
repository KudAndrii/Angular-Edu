import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Ingredient } from 'shared/models/ingredient.model';
import { ShoppingListService } from 'shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit {
  ingredient: Ingredient;

  constructor(private route: ActivatedRoute, private cartService: ShoppingListService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ingredient = this.cartService.findOne(params['name'])
    })
  }
}
