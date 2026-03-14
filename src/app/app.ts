import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailComponent } from './detail-component/detail-component';
import { MediaComponent } from './media-component/media-component';
import { PlayersComponent } from './players-component/players-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DetailComponent, MediaComponent, PlayersComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('equipo-basket-test');
  view = 'home';
}
