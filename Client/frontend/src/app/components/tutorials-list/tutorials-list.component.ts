import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial/tutorial.module';
import { TutorialService } from 'src/app/services/tutorial.service';
@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {
  tutorials?: Tutorial[];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  Name = '';
  tutorial:any;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }
  retrieveTutorial(id:any): void {
    this.tutorialService.get(id)
      .subscribe(
        data => {
          this.tutorial = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe(
        data => {
          this.tutorials = data;

        },
        error => {
          console.log(error);
        });
  }
  
  deleteTutorial(id:any): void {
    this.tutorialService.delete(id)
      .subscribe(
        data => {
          this.tutorial = data;
          this.retrieveTutorials();
        },
        error => {
          console.log(error);
        });
  }



}
