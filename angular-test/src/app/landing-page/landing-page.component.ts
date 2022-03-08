import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  userEmail: string = "default@test.com";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToFaceSnaps(): void{
    this.router.navigateByUrl('facesnaps');
  }

  onSubmitForm(form: NgForm){
    console.log(form.value);
  }

}
