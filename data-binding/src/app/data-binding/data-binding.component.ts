import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  url: string = "http://loiane.com"
  cursoAngular = true;
  urlImagem = 'https://picsum.photos/200/300';

  atributo = '';
  forca: number = 0;

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 15;

  getValor(){
    return 1;
  }

  getCurtiCurso(){
    return true;
  }

  botaoClicado(){
  }

  onClick(){
    alert("Vai tomar no cu!!");
  }

  atributoSalvo(valor: string){
    this.atributo = valor;
    this.forca = Math.floor((parseInt(this.atributo) - 10) / 2)
  }

  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }




}
