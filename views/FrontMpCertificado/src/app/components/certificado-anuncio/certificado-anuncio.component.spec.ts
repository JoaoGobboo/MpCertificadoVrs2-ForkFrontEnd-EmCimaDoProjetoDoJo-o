import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoAnuncioComponent } from './certificado-anuncio.component';

describe('CertificadoAnuncioComponent', () => {
  let component: CertificadoAnuncioComponent;
  let fixture: ComponentFixture<CertificadoAnuncioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificadoAnuncioComponent]
    });
    fixture = TestBed.createComponent(CertificadoAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
