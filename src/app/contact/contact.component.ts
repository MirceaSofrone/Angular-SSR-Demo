import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  constructor(private meta: Meta) { }

  ngOnInit(): void {
    this.meta.updateTag({property: 'og:title', content: 'Contact Page'});
    this.meta.updateTag({property: 'og:description', content: 'This is the contact page description'});
    this.meta.updateTag({property: 'og:image', content: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'});
    this.meta.updateTag({property: 'og:url', content: 'https://bnnl9wg0-4200.euw.devtunnels.ms/contact'});
  }
}
