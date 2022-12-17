import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Chart } from 'chart.js';
import { PorfolioService } from '../../sevice/porfolio.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  data: Data[] = [];

  constructor( private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
  }

  editAcercaDe() {
    console.log("Acerca de mí!");
  }

  educacion() {
    console.log("Educación");
  }

  experiencia() {
    console.log("Experiencia");
  }

  habilidades() {
    console.log("Habilidades");
  }

  proyectos() {
    console.log("Proyectos")
  }

  deleteProyecto(data:Data){
    console.log(data)
    this.datosPorfolio.deleteProyecto(data).subscribe(() => (
      this.data = this.data.filter( (t) => {
        return t.id != data.id
      })
    ))
  }

  deleteExperiencia(data:Data) {
    console.log(data);
  }

  deleteEducacion(data:Data) {
    console.log(data);
  }

}
