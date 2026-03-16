import { Component, signal } from '@angular/core';
import { DetailComponent } from './detail-component/detail-component';
import { PlayersComponent } from './players-component/players-component';
import { Player } from './models/player';

@Component({
  selector: 'app-root',
  imports: [DetailComponent, PlayersComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('equipo-basket-test');
  view = 'home';

  selectedPlayer?: Player | null;
}
