import { Component, Input } from '@angular/core';
import { Player } from '../models/player';
import { MediaComponent } from "../media-component/media-component";

@Component({
  selector: 'app-detail-component',
  imports: [MediaComponent],
  templateUrl: './detail-component.html',
  styleUrl: './detail-component.css',
})
export class DetailComponent {
  @Input()

  player?: Player;
}
