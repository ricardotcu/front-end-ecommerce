import { Produto } from './Produto';

export class Cliente {
  public id: number;
  public nome: string;
  public email: string;
  public senha: string;
  public avatar: string;
  public token: string;
  public carrinho: Produto[];
}