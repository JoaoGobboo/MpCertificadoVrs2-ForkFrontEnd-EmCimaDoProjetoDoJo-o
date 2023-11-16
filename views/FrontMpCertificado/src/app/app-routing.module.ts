import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CertificadoAnuncioComponent } from './components/certificado-anuncio/certificado-anuncio.component';

const routes: Routes = [
  {path: 'certificadoAnuncio', component: CertificadoAnuncioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
