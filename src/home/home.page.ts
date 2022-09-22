import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Info: any;

  constructor(private http: HttpClient, public toast: ToastController) {}

  cep: String;

  getCEP() {
    this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`)
    .subscribe((res) => {this.Info = res});
  }

  limpar() {
    this.cep = '';
    this.Info = '';
  }
}
