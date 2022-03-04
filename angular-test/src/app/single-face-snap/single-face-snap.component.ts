import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;

  snapButtonText!: string;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.snapButtonText = "Oh Snap!";
    // je récupère l'id dans l'url (et le reconvertis en number avec "+")
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap(){
    if (this.snapButtonText === "Oh Snap!") {
      this.faceSnapsService.snapFaceSnapsById(this.faceSnap.id, 'snap');
      this.snapButtonText = "Oops, unSnap!";
    } else {
      this.faceSnapsService.snapFaceSnapsById(this.faceSnap.id, 'unsnap');
      this.snapButtonText = "Oh Snap!";
    }
    
  }

}
