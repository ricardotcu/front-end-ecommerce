import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  readonly apiURL : string;
  public rota: Router;
  public produto: any;
  public produto_add_carrinho: any;
  public id_produto: any;
  profileForm = new FormGroup({
    search: new FormControl('')
  });
  @Input()
  public session: any;

  constructor(private route: ActivatedRoute, private http : HttpClient, private r: Router){
    this.apiURL = 'https://back-end-ecommerce.herokuapp.com';
    this.rota = r;
  }

  ngOnInit(): void {
    this.session = JSON.parse(window.localStorage.getItem('currentUser'));
    console.log(this.session)

    this.route.params.subscribe( parametros => {
      if (parametros['id']) {
        this.id_produto = parametros['id']
      }
    });

    this.http.get(`${this.apiURL}/produto/${this.id_produto}`)
      .subscribe(result => {
        this.produto = result;
      });
  }

  logout() {
    window.localStorage.clear();
    this.session = false;
  }
}
