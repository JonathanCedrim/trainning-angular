import { Injectable } from '@angular/core';

@Injectable()
export class AlertaService {

  constructor() { }

  msgAlerta() {
    alert('Livro Angular 2');
  }
}
