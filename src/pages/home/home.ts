import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  isAtWelcome = true;
  isAtQuiz = false;
  isFinishedAtQuiz = false;

  questionSheet: Array<any> = [
    {
      question: 'What is the what of all whats? 1',
      choices: {
        a: {
          displayOption: 'A',
          answer: true
        },
        b: {
          displayOption: 'B'
        },
        c: {
          displayOption: 'C'
        },
        d: {
          displayOption: 'D'
        }
      }
    },

    {
      question: 'What is the what of all whats? 2',
      choices: {
        a: {
          displayOption: 'A',
          answer: true
        },
        b: {
          displayOption: 'B'
        },
        c: {
          displayOption: 'C'
        },
        d: {
          displayOption: 'D'
        }
      }
    },

    {
      question: 'What is the what of all whats? 3',
      choices: {
        a: {
          displayOption: 'A',
          answer: true
        },
        b: {
          displayOption: 'B'
        },
        c: {
          displayOption: 'C'
        },
        d: {
          displayOption: 'D'
        }
      }
    },

    {
      question: 'What is the what of all whats? 4',
      choices: {
        a: {
          displayOption: 'A',
          answer: true
        },
        b: {
          displayOption: 'B'
        },
        c: {
          displayOption: 'C'
        },
        d: {
          displayOption: 'D'
        }
      }
    },
  ];

  questionSet: Array<any> = [{}];




  ngOnInit() {
    this.getQuestionSheet();
    console.log(this.questionSet[0]);
  }

  doneAndProgress() {
    if (this.isAtWelcome) {
      this.isAtWelcome = !this.isAtWelcome;
      this.isAtQuiz = !this.isAtQuiz;
    }
    else if (this.isAtQuiz) {
      this.isAtQuiz = !this.isAtQuiz;
      this.isFinishedAtQuiz = !this.isFinishedAtQuiz;
    }
    else if (this.isFinishedAtQuiz) {
      this.isFinishedAtQuiz = !this.isFinishedAtQuiz;
      this.isAtWelcome = !this.isAtWelcome;
    }

  }

  getQuestionSheet() {
    this.questionSet = [... this.questionSheet];
  }

  getCorrectAnswer(question) {


  }

}