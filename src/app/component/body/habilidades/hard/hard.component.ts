import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-hard',
  templateUrl: './hard.component.html',
  styleUrls: ['./hard.component.css']
})
export class HardComponent implements OnInit {
  canvas: any;
  ctx:any;

  constructor() { }

  ngOnInit(): void {
    this.setBar();
  }

  setBar() {
    this.canvas = document.getElementById('HardSkills');

    this.ctx = this.canvas.getContext('2d');

    const HardSkills = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels: ['Frontend', 'Backend', 'Servidores', 'Base de Datos'],
          datasets: [{
              label: 'Hard Skills',
              data: [75, 50, 25, 10],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          },
          responsive: true,
        }
    });
  }


}
