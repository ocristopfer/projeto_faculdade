import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { SelectAll } from '../directivas/select-all';

@Component({
  selector: 'app-easy-fuel',
  templateUrl: './easy-fuel.component.html',
  styleUrls: ['./easy-fuel.component.scss'],
})
export class EasyFuelComponent implements OnInit {
  
  gasolina: number;
  alcool: number;
  resultado: string = "";
  mostrarResultado: boolean = false;
  resultadoCor: string = "danger";
  constructor(
    public alertController: AlertController, 
    public toastController: ToastController 
  ) { }
  
  ngOnInit() {}
  
  private calcular() {
    this.mostrarResultado = false;
    if(this.gasolina == 0 || this.gasolina == null || this.alcool == 0 || this.alcool == null){
      this.presentToast('Valores não podem ser zerados ou vazios');
      return;
    }

    if((this.alcool/this.gasolina) < 0.7){
      this.presentToast('Abasteça com Álcool');
      this.resultado = 'Álcool';
      this.resultadoCor = "success";
    }else
    {
      this.presentToast('Abasteça com Gasolina');
      this.resultado = 'Gasolina';
      this.resultadoCor = "danger";
    }
    this.mostrarResultado = true;

  }

  limparGas(){
    this.gasolina = null;
  }

  limparAlcool(){
    this.alcool = null;
  }
  
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  
}

