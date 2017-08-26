import { Component, OnInit } from '@angular/core';

import { ListaPessoaService } from './../listapessoa.service';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})

export class DietComponent implements OnInit {
  title = 'Dieta';
  pessoas = [];
  foto = 'favicon.ico';
  nome;
  listaService;
  nomeDeleta = `ouwwwon`;

  constructor(private service: ListaPessoaService) {
    this.listaService = service;
  }

  ngOnInit() {
  }

  ola() {
    alert(`ola noob`);
  }

  gravaService() {
    this.listaService.adicionaPessoa(this.nomeDeleta);
  }

  removeService() {
    this.listaService.removePessoa(this.nomeDeleta);
  }
}
