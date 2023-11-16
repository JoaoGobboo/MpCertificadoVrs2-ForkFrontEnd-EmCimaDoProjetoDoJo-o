import { TestBed } from '@angular/core/testing';

import { CertificadoAnuncioService } from './certificado-anuncio.service';

describe('CertificadoAnuncioService', () => {
  let service: CertificadoAnuncioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificadoAnuncioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
