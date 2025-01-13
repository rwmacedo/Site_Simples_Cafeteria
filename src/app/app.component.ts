import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopoComponent } from './topo/topo.component';
import { BannerComponent } from './banner/banner.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { ContatosComponent } from './contatos/contatos.component';
import { HorariosComponent } from './horarios/horarios.component';
import { RodapeComponent } from './rodape/rodape.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopoComponent,
    BannerComponent,
    InformacoesComponent,
    ContatosComponent,
    HorariosComponent,
    RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cafeteria';
}
