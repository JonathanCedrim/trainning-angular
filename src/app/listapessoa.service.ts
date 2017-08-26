import { Injectable } from '@angular/core';

@Injectable()
export class ListaPessoaService {
nomePessoas = [];

  constructor() { }

  adicionaPessoa(nome: string): void {
    this.nomePessoas.push(nome);
  }

  removePessoa(nome: string): void {    
    let index = this.nomePessoas.indexOf(nome);
    if (index >= 0) {
      this.nomePessoas.splice(index, 1);
    }
  }
}
