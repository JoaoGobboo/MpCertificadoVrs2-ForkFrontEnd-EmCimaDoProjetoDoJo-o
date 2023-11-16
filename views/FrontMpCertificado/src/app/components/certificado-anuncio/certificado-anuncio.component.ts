import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Observer } from 'rxjs';
import { CertificadoAnuncio } from 'src/models/CertificadoAnuncio';
import { CertificadoAnuncioService } from 'src/app/certificado-anuncio.service';

@Component({
  selector: 'app-certificado-anuncio',
  templateUrl: './certificado-anuncio.component.html',
  styleUrls: ['./certificado-anuncio.component.css']
})
export class CertificadoAnuncioComponent implements OnInit {
  @ViewChild('cancelarButton') cancelarButton!: ElementRef;
  formulario: any;
  formularioBuscar: any;
  listaCertificados: CertificadoAnuncio[] = [];
  certificadoEncontrado: CertificadoAnuncio | null = null;

  constructor(private certificadoAnuncioService: CertificadoAnuncioService, private titleService: Title) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      idCertificadoAnuncio: new FormControl(null),
      // Adicione outros campos conforme necessário para CertificadoAnuncio
    });
    this.listar();
    this.formularioBuscar = new FormGroup({
      idCertificadoAnuncio: new FormControl(null),
    });
    this.titleService.setTitle('Certificados de Anúncio - MidnightCity');
  }

  cadastrar(): void {
    const certificado: CertificadoAnuncio = this.formulario.value;
    if (!certificado.IdCertificadoAnuncio) {
      certificado.IdCertificadoAnuncio = 0;
    }
    const observer: Observer<CertificadoAnuncio> = {
      next(_result): void {
        alert('Certificado cadastrado com sucesso.');
      },
      error(error): void {
        console.error(error);
        alert('Erro de cadastro, verifique se todos os campos foram preenchidos corretamente.');
      },
      complete(): void {},
    };
    this.certificadoAnuncioService.cadastrar(certificado).subscribe(observer);
  }

  listar(): void {
    this.certificadoAnuncioService.listar().subscribe(
      (certificados: CertificadoAnuncio[]) => {
        this.listaCertificados = certificados;
      },
      (error) => {
        console.error(error);
        alert('Erro ao carregar a lista de certificados!');
      }
    );
  }

  buscar(): void {
    const idCertificadoAnuncio: number = this.formularioBuscar.get('idCertificadoAnuncio').value;

    if (idCertificadoAnuncio) {
      this.certificadoAnuncioService.buscar(idCertificadoAnuncio).subscribe(
        (certificadoEncontrado: any) => {
          console.log(certificadoEncontrado);
          this.formularioBuscar.get('idCertificadoAnuncio')?.setValue(certificadoEncontrado.idCertificadoAnuncio);
          this.certificadoEncontrado = certificadoEncontrado;
        },
        (error) => {
          console.error(error);
          alert('Erro ao buscar certificado de anúncio!');
        }
      );
    } else {
      alert('Por favor, insira um ID válido para buscar.');
    }
  }

  alterar(): void {
    const certificado: CertificadoAnuncio = this.formulario.value;
    if (certificado.IdCertificadoAnuncio === null) {
      alert('Por favor, busque um certificado antes de tentar alterar.');
      return;
    }
    // Adicione outras verificações ou ajustes conforme necessário para CertificadoAnuncio

    const observer: Observer<CertificadoAnuncio> = {
      next(_result): void {
        alert('Certificado alterado com sucesso.');
      },
      error(error): void {
        console.error(error);
        alert('Erro ao alterar certificado!');
      },
      complete(): void {},
    };
    this.certificadoAnuncioService.alterar(certificado).subscribe(observer);
  }

  excluir(): void {
    const idCertificadoAnuncio: number = this.formulario.get('idCertificadoAnuncio').value;

    if (idCertificadoAnuncio) {
      if (confirm('Tem certeza que deseja excluir o certificado?')) {
        this.certificadoAnuncioService.excluir(idCertificadoAnuncio).subscribe(
          () => {
            alert('Certificado excluído com sucesso.');
            this.reloadPage();
          },
          (error) => {
            console.error(error);
            alert('Erro ao excluir certificado!');
          }
        );
      }
    } else {
      alert('Por favor, insira um ID válido para excluir.');
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
