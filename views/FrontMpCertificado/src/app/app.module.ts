import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule} from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CertificadoAnuncioService } from './certificado-anuncio.service';
import { CertificadoAnuncioComponent } from './components/certificado-anuncio/certificado-anuncio.component';


@NgModule({
  declarations: [
    AppComponent,
    CertificadoAnuncioComponent,
    ReactiveFormsModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule, CertificadoAnuncioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
