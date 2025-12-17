import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  // ✅ AGREGADO: RouterLinkActive para resaltar el enlace activo
  imports: [RouterLink, RouterLinkActive]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
