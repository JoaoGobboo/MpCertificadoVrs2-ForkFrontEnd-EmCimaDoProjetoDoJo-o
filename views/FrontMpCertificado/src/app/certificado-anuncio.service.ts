import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CertificadoAnuncio } from 'src/models/CertificadoAnuncio';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CertificadoAnuncioService {
  apiUrl = 'http://localhost:5000/api/CertificadoAnuncio';
  constructor(private http: HttpClient) { }

  listar(): Observable<CertificadoAnuncio[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<CertificadoAnuncio[]>(url);
  }

  buscar(idCertificadoAnuncio: number): Observable<CertificadoAnuncio> {
    const url = `${this.apiUrl}/buscar/${idCertificadoAnuncio}`;
    return this.http.get<CertificadoAnuncio>(url);
  }

  cadastrar(certificadoAnuncio: CertificadoAnuncio): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<CertificadoAnuncio>(url, certificadoAnuncio, httpOptions);
  }

  alterar(certificadoAnuncio: CertificadoAnuncio): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<CertificadoAnuncio>(url, certificadoAnuncio, httpOptions);
  }

  excluir(idCertificadoAnuncio: number): Observable<any> {
    const url = `${this.apiUrl}/excluir/${idCertificadoAnuncio}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
