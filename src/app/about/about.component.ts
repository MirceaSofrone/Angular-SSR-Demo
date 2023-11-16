import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  constructor(private meta: Meta) { }

  ngOnInit(): void {
    this.meta.updateTag({property: 'og:title', content: 'About Page'});
    this.meta.updateTag({property: 'og:description', content: 'This is the about page description'});
    this.meta.updateTag({property: 'og:image', content: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'});
    this.meta.updateTag({property: 'og:url', content: 'https://bnnl9wg0-4200.euw.devtunnels.ms/about'})
  }
}
