import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { ProgramsComponent } from './programs/programs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,HeaderComponent,WhoWeAreComponent,ProgramsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ascona_page';
}
