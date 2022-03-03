import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap("Archibald",
      'mon meilleur ami',
      new Date(),
      8,
      "../../assets/archibald.jpg"
    );

    this.myOtherSnap = new FaceSnap("Willou",
      'sympa les seychelles',
      new Date(),
      3,
      "../../assets/archibald.jpg"
    );

    this.myLastSnap = new FaceSnap("Jem-mich much",
      'fait pas la tronche',
      new Date(),
      12,
      "../../assets/archibald.jpg"
    );
  }

}
