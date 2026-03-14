import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media-component',
  imports: [],
  templateUrl: './media-component.html',
  styleUrl: './media-component.css',
})
export class MediaComponent {
  @Input()
  video?: string;

  restart(video: HTMLVideoElement){
    video.currentTime = 0;
    video.play();
  }
}
