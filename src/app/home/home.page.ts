import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  radioDesc: string='';
  distancia: string='';
  item: string='';
  compra: number= 0;
  peso: string='';
  resultado: number=0;
  radioSelecionada: string='';


  constructor(
    public alertController: AlertController
  ) {}

  //Frete
  calcular() {

    this.resultado = (parseFloat(this.peso))+ (parseFloat(this.distancia) / 2)

    if(this.radioSelecionada == "freteexpresso"){
      this.resultado = this.resultado
    }
    else if(this.radioSelecionada == "frete2"){
      this.resultado= this.resultado / 2 + 10
    }
    else if(this.radioSelecionada == "frete7"){
      this.resultado = this.resultado / 2

      
    }
  }
  
  
  verificar(){
    this.calcular()
  }
  
  
  //Desconto
  desconto (){
    if (this.radioDesc=== 'item3'){
      this.compra= (this.resultado);
    }

    else if(this.radioDesc=== 'item7'){
      this.compra= (this.resultado) - ((this.resultado) * 0.10);
    }

    else if(this.radioDesc==='item8') {
      this.compra= (this.resultado ) - ((this.resultado) * 0.15);
    }
  }

    async exibirDesconto() {
    const alert = await this.alertController.create({
   header: 'O valor total da compra é: ', 
    message: this.compra.toString(), 
   buttons: ['OK'] 
   });
    alert.present();
  }

  verificarDesc(){
    this.desconto();
    this.exibirDesconto();
  }
  

}