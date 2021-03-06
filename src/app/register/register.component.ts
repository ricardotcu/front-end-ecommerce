import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Cliente } from '../models/Cliente';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  profileForm = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl(''),
    avatar: new FormControl('')
  });
  title = 'register';	
  readonly apiURL : string;
  public rota: Router;

  constructor(private http : HttpClient, private r: Router){
    this.apiURL = 'https://back-end-travel.herokuapp.com';
    this.rota = r;
  }

  ngOnInit(): void {
  }
  
  register(cliente: Cliente) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'post',
        'Access-Control-Allow-Origin': 'https://keen-curie-febfbf.netlify.app'
      })
    };

    console.log(cliente)
    this.http.post(`${this.apiURL}/register_cliente`, cliente, httpOptions)
      .subscribe(result => {
        window.localStorage.setItem('currentUser', JSON.stringify(result));
        this.r.navigate(['/home']);
      });
  }
  
  onSubmit() {
    this.register(this.profileForm.value);
  }

}