import { Categoria } from './Categoria';

export class Produto {
  public id: number;
  public nome: string;
  public descricao: string;
  public valor: number;
  public caminho: string;
  public destaque: string;
  public categoria: Categoria;
}