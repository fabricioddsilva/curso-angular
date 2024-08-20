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

  getValor(){
    return 1;
  }

  getCurtiCurso(){
    return true;
  }

}
