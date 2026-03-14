import { Component, Output, EventEmitter } from '@angular/core';
import { players } from '../data//players';
import { Player } from '../models/player';

@Component({
  selector: 'app-players-component',
  imports: [],
  templateUrl: './players-component.html',
  styleUrl: './players-component.css',
})
export class PlayersComponent {
  players = players;

  @Output()

  playerSelected = new EventEmitter<Player>();

  selectPlayer(player: Player){
    console.log("Jugador Seleccionado: ", player);
    this.playerSelected.emit(player);
  }
}
