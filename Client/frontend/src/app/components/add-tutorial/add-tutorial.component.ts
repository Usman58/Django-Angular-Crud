import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial/tutorial.module';
import { TutorialService } from 'src/app/services/tutorial.service';
@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  tutorial: Tutorial = {
    Name: '',
    age:''
  };

  submitted = false;
  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }
  saveTutorial(): void {
    const data = {
      Name: this.tutorial.Name,
      age: this.tutorial.age,
    };


  this.tutorialService.create(data)
  .subscribe(
    response => {
      console.log(response);
      this.submitted=true;
      this.tutorial = {
        Name: '',
        age: '',
      };
    },
    error => {
      console.log(error);
    });
  }

}
