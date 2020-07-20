import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContatoComponent } from './contato/contato.component';
import { AboutComponent } from './about/about.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProdutoComponent } from './produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login_cliente', component: LoginComponent },
  { path: 'register_cliente', component: RegisterComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produto/:id', component: ProdutoComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'carrinho', component: CarrinhoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
