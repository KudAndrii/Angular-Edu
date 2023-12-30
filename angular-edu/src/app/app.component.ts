import { Component } from '@angular/core';
import { Pages } from './shared/pages.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly Pages = Pages;

  activePage: Pages = Pages.Recipes;

  updateActivePage(page: Pages) {
    this.activePage = page;
  }
}
