import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hellloworld',
  templateUrl: './hellloworld.component.html',
  styleUrls: ['./hellloworld.component.css']
})
export class HellloworldComponent implements OnInit {
  private name:string;

  constructor() { }

  ngOnInit() {
  }

}
