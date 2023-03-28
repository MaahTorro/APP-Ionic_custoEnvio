import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  distancia: string='';
  resultado: number=0;
  item: string='';
  compra: number= 0;
  radioSelecionada: string='';
  radioDesc: string='';
  peso: string='';


  constructor(
    public alertController: AlertController
  ) {}

  //Frete
  calcular() {

    this.resultado = (parseFloat(this.peso) * 2)+ (parseFloat(this.distancia) * 4)

    if(this.radioSelecionada == "freteAM"){
      this.resultado = this.resultado + 20
    }
    else if(this.radioSelecionada == "frete2"){
      this.resultado = this.resultado + 15
    }
    else if(this.radioSelecionada == "frete5"){
      this.resultado = this.resultado + 10
    }
    else if(this.radioSelecionada == "frete7"){
      this.resultado = this.resultado + 5
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