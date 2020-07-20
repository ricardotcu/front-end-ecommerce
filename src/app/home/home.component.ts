import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'home';	
  public rota: Router;
  public resumo: any;
  readonly apiURL : string;
  @Input()
  public session: any;

  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'https://back-end-ecommerce.herokuapp.com';
    this.rota = r;
  }

  ngOnInit(): void {
    this.session = JSON.parse(window.localStorage.getItem('currentUser'));
    console.log(this.session)

    this.http.get(`${this.apiURL}/home`)
      .subscribe(result => {
        this.resumo = result;
        console.log(this.resumo)
      });
  }

}
