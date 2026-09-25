import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.page.html',
  styleUrls: ['./autenticacao.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AutenticacaoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
