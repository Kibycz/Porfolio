import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css']
})
export class SoftComponent implements OnInit {
  canvas: any;
  cty:any;

  constructor() { }

  ngOnInit(): void {
    this.setBar();
  }

  setBar() {
    this.canvas = document.getElementById('SoftSkills');

    this.cty = this.canvas.getContext('2d');

    const SoftSkills = new Chart(this.cty, {
      type: 'bar',
      data: {
          labels: ['Productividad', 'Resolutivo', 'Eficiente', 'Creativo'],
          datasets: [{
              label: 'Soft Skills',
              data: [50, 75, 25, 10],
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
