import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  // ✅ AGREGADO: standalone: true permite que el componente funcione con loadComponent
  standalone: true,
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export default class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
