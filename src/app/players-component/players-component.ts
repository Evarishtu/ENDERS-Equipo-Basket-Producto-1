import { Component } from '@angular/core';
import { players } from '../data//players';

@Component({
  selector: 'app-players-component',
  imports: [],
  templateUrl: './players-component.html',
  styleUrl: './players-component.css',
})
export class PlayersComponent {
  players = players;
}
