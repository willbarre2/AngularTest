import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit  {

  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;

  constructor(private faceSnapsService: FaceSnapsService, private router: Router) { }

  ngOnInit() {
    this.snapButtonText = "Oh Snap!";
  }

  // onSnap(){
  //   if (this.snapButtonText === "Oh Snap!") {
  //     this.faceSnapsService.snapFaceSnapsById(this.faceSnap.id, 'snap');
  //     this.snapButtonText = "Oops, unSnap!";
  //   } else {
  //     this.faceSnapsService.snapFaceSnapsById(this.faceSnap.id, 'unsnap');
  //     this.snapButtonText = "Oh Snap!";
  //   }
    
  // }

  onViewFaceSnap(snapId: number){
    this.router.navigateByUrl('facesnaps/' + snapId);
  }

}
