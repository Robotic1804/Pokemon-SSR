import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'about',
  // ✅ AGREGADO: standalone: true permite que el componente funcione con loadComponent
  standalone: true,
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export default class AboutPageComponent implements OnInit{

  private title = inject(Title)
  private meta = inject(Meta)
  private platform = inject(PLATFORM_ID)

  ngOnInit(): void {
  //  console.log(isPlatformServer(this.platform));
  //  this.title.setTitle('About Page')
  //  this.meta.updateTag({ name: 'description', content: 'This is the about page of our Pokémon SSR application.' })
  //  this.meta.updateTag({ name: 'og:title', content: 'About Page' })
  //  this.meta.updateTag({ name: 'keywords', content: 'Hola Mundo, Norman Navarro, ssr' })
 }


}
