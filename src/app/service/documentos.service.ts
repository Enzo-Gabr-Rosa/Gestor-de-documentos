import { inject, Service } from '@angular/core';
import { Documento } from '../modelos/documento.modelo';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Service()
export class DocumentosService {
  private documentos: Documento[] = [];
  private http = inject(HttpClient);
  private api = environment.api

  constructor () {
  }

  obterDocumetos(){
    return this.http.get<Documento[]>(this.api+"/documentos");
  }

}
