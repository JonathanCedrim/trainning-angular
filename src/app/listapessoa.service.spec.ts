import { TestBed, inject } from '@angular/core/testing';

import { ListaPessoaService } from './listapessoa.service';

describe('ListapessoaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaPessoaService]
    });
  });

  it('should be created', inject([ListaPessoaService], (service: ListaPessoaService) => {
    expect(service).toBeTruthy();
  }));
});
