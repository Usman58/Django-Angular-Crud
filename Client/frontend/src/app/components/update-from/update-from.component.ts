import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorialService } from 'src/app/services/tutorial.service';
import {FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-update-from',
  templateUrl: './update-from.component.html',
  styleUrls: ['./update-from.component.css']
})
export class UpdateFromComponent implements OnInit {
  profileForm = new FormGroup({
    Name: new FormControl(''),
    age: new FormControl(''),
  });
  onSubmit() {
    console.warn("==>",this.profileForm.value);
  }

  constructor(private tutorialService: TutorialService,
    public currentid:ActivatedRoute,
    private router:Router) { }
  id=this.currentid.snapshot.params['id'];
  tutorial:any;
  retrieveTutorial(id:any): void {
    this.tutorialService.get(id)
      .subscribe(
        data => {
          this.profileForm.patchValue({
            Name:data.Name,
            age:data.age,
          })
        },
        error => {
          console.log(error);
        });
  }

  ngOnInit(): void {
   this.retrieveTutorial(this.id);
  }
  updateData() {
    debugger;
    this.tutorialService.update(this.id,this.profileForm.value)
      .subscribe(response => {
        console.log(response);
        this.router.navigateByUrl("/tutorials")
      })
  }

}
