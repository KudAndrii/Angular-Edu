import { Component, EventEmitter, Output } from '@angular/core';
import { Pages } from '../shared/pages.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  collapsed: boolean = true;
  @Output('go-to') followTo = new EventEmitter<Pages>();

  navigate(page: Pages) {
    this.followTo.emit(page);
  }

  protected readonly Pages = Pages;
}
