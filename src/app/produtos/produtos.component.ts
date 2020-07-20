import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  readonly apiURL : string;
  public rota: Router;
  public produtos: any;
  profileForm = new FormGroup({
    search: new FormControl('')
  });

  items = [];
  page: number;
  collectionSize: number;
  pageSize: number;
  @Input()
  public session: any;

  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'https://back-end-ecommerce.herokuapp.com';
    this.rota = r;
  }

  ngOnInit(): void {
    this.session = JSON.parse(window.localStorage.getItem('currentUser'));
    console.log(this.session)

    this.http.get(`${this.apiURL}/produtos`)
      .subscribe(result => {
        this.produtos = result;
        this.collectionSize = this.produtos.length;
        this.page = 1;
        this.pageSize = 9;
        this.items = this.produtos;
      });
  }

}
