import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pricing',
  // ✅ AGREGADO: standalone: true permite que el componente funcione con loadComponent
  standalone: true,
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.css']
})
export default class PricingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
