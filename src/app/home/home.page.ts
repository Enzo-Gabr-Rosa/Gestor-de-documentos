import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonGrid, IonRow, IonCol, IonIcon, IonTitle, IonContent } from '@ionic/angular';
import { DocumentosService } from '../service/documentos.service';
import { Documento } from '../modelos/documento.modelo';

import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonGrid, IonRow, IonCol, IonIcon, IonTitle, IonContent],
})
export class HomePage {
  private documetosService = inject(DocumentosService);
  private cdr = inject(ChangeDetectorRef)
  protected documentos: Documento[] = [];

  constructor() {
    addIcons({ trashOutline })
    this.obterDocumentos();
  }

  async obterDocumentos() {
    console.log('Tentativa de requisição');

    this.documetosService.obterDocumetos().subscribe({

      next: async (documentos: any[]) => {
        
        this.documentos = documentos;
        
        console.log('Requisição concluída');
        console.log(this.documentos);
        
        this.cdr.detectChanges();
      }, 
      error: (exception) => {
        console.error('Erro na requisição:', exception);
      }
    })
  }
}
