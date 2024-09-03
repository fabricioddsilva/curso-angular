import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrl: './diretiva-ngif.component.scss'
})
export class DiretivaNgifComponent {
  cursos: string[] = [];

  mostrarCursos = false;

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }
}
