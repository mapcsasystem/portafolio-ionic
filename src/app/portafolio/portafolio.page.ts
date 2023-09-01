import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.page.html',
  styleUrls: ['./portafolio.page.scss'],
})
export class PortafolioPage {
  goTo(id: string) {
    if (!document.getElementById(id)) return;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
