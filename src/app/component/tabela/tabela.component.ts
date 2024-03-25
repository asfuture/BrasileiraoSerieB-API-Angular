import { Component, OnInit } from '@angular/core';

import { CampeonatoService } from '../../services/campeonato.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})
export class TabelaComponent implements OnInit {
  tabela!:any;

  constructor(private campeonatoService:CampeonatoService){}

  ngOnInit(): void {
   this.tabela = this.campeonatoService.getTabelaSerieB();
  }
}
