import { Component } from '@angular/core';

@Component({
  selector: 'app-topo',
  standalone: true,
  imports: [],
  templateUrl: './topo.component.html',
  styleUrl: './topo.component.css'
})
export class TopoComponent {
  menuAberto: boolean = false; // Estado inicial do menu fechado

  alternarMenu(): void {
    this.menuAberto = !this.menuAberto; // Alterna entre aberto e fechado
  }
}


