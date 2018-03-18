import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyAudioPreviewPlayerComponent } from './spotify-audio-preview-player/spotify-audio-preview-player.component';
import { SpotifyAudioPreviewService } from './spotify-audio-preview.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SpotifyAudioPreviewPlayerComponent
  ],
  exports: [
    SpotifyAudioPreviewPlayerComponent
  ],
  providers: [
    SpotifyAudioPreviewService
  ]
})
export class SpotifyAudioPreviewModule { }
