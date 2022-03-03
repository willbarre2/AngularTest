import { Component, Input, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap.component';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit  {

  @Input() faceSnap!: FaceSnap;

  
  snapButtonText!: string;

  ngOnInit() {
    this.snapButtonText = "Oh Snap!";
  }

  onSnap(){
    if (this.snapButtonText === "Oh Snap!") {
      this.faceSnap.snaps++;
      this.snapButtonText = "Oops, unSnap!";
    } else {
      this.faceSnap.snaps--;
      this.snapButtonText = "Oh Snap!";
    }
    
  }

}
