import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input()
  public session: any;

  constructor() { }

  ngOnInit(): void {
    this.session = JSON.parse(window.localStorage.getItem('currentUser'));
    console.log(this.session)
  }

}
