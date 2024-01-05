import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {
  message: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.message = this.route.snapshot.data['message'];
  }
}
