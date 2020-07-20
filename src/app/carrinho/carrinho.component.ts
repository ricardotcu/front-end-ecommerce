import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  @Input()
  public session: any;

  constructor() { }

  ngOnInit(): void {
    this.session = JSON.parse(window.localStorage.getItem('currentUser'));
    console.log(this.session)
  }

  logout() {
    window.localStorage.clear();
    this.session = false;
  }
}
