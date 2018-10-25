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
  quizNumber = 0;
  quizUserAnswer;
  //ang structute sa data
  questionSheet: Array<any> = [

    {
      question: 'Unlike rodents, the rabbit has how many incisor teeth?',
      choices: {
        a: {
          displayOption: '4',
          answer: true
        },
        b: {
          displayOption: '8'
        },
        c: {
          displayOption: '2'
        },
        d: {
          displayOption: '3'
        }
      }
    }, //1

    {
      question: 'What percent of fire-related deaths are due to smoke inhalation rather than burns?',
      choices: {
        a: {
          displayOption: '10%',

        },
        b: {
          displayOption: '50%'
        },
        c: {
          displayOption: '80%',
          answer: true
        },
        d: {
          displayOption: '99%'
        }
      }
    }, //2

    {
      question: 'How many men have walked on the moon?',
      choices: {
        a: {
          displayOption: '2'

        },
        b: {
          displayOption: '12',
          answer: true
        },
        c: {
          displayOption: '4'
        },
        d: {
          displayOption: '1'
        }
      }
    }, //3

    {
      question: 'The fastest-running terrestrial animal is:',
      choices: {
        a: {
          displayOption: 'cheetah',
          answer: true
        },
        b: {
          displayOption: 'lion'
        },
        c: {
          displayOption: 'man'
        },
        d: {
          displayOption: 'jaguar'
        }
      }
    }, //4

    {
      question: 'Which sea is the saltiest natural lake and is also at the lowest elevation on the face of the earth?',
      choices: {
        a: {
          displayOption: 'South China Sea',
        },
        b: {
          displayOption: 'Dead Sea',
          answer: true
        },
        c: {
          displayOption: 'Pacific Ocean'
        },
        d: {
          displayOption: 'Red Sea'
        }
      }
    }, //5

    {
      question: 'The scarab, worshipped by the Egyptians, is what type of beetle?',
      choices: {
        a: {
          displayOption: 'Stag Beetle',

        },
        b: {
          displayOption: 'Rhinotia Hemistictus'
        },
        c: {
          displayOption: ' Rhinoceros Beetles'

        },
        d: {
          displayOption: 'Dung Beetle',
          answer: true
        }
      }
    }, //6

    {
      question: 'As you go down into a well, your weight:',
      choices: {
        a: {
          displayOption: 'increases slightly',

        },
        b: {
          displayOption: 'decreases slightly',
          answer: true
        },
        c: {
          displayOption: 'remains exactly the same'
        },
        d: {
          displayOption: 'all of the above'
        }
      }
    }, //7

    {
      question: 'cloud at ground level is called what?',
      choices: {
        a: {
          displayOption: 'Land Cloud'
        },
        b: {
          displayOption: 'Nimbus Cloud'
        },
        c: {
          displayOption: 'Fog',
          answer: true
        },
        d: {
          displayOption: 'Clog'
        }
      }
    }, //8

    {
      question: 'What invention in about 1450 A.D. revolutionized communication and the world?',
      choices: {
        a: {
          displayOption: 'Printing Press',
          answer: true
        },
        b: {
          displayOption: 'Telephone'
        },
        c: {
          displayOption: 'Cellphone'
        },
        d: {
          displayOption: 'All of the above'
        }
      }
    }, //9

    {
      question: 'What is the name for the new technology whereby a glass fiber carries as much information as hundreds of copper wires?',
      choices: {
        a: {
          displayOption: 'Copper Wire'
        },
        b: {
          displayOption: 'Fiber Optics',
          answer: true
        },
        c: {
          displayOption: 'Cable Line'
        },
        d: {
          displayOption: 'Dud Wire'
        }
      }
    }, //10

    {
      question: 'What mammal lays eggs?',
      choices: {
        a: {
          displayOption: 'Platypus',
          answer: true
        },
        b: {
          displayOption: 'Duck'
        },
        c: {
          displayOption: 'Snake'
        },
        d: {
          displayOption: 'Dolphin'
        }
      }
    }, //11

    {
      question: 'Bees must collect nectar from approximately how many flowers to make 1 pound of honeycomb?',
      choices: {
        a: {
          displayOption: '10 thousand'
        },
        b: {
          displayOption: '2 million'
        },
        c: {
          displayOption: '20 million',
          answer: true
        },
        d: {
          displayOption: '50 million'
        }
      }
    }, //12

    {
      question: 'Albacore is a type of:',
      choices: {
        a: {
          displayOption: 'shell-fish'
        },
        b: {
          displayOption: 'tuna',
          answer: true
        },
        c: {
          displayOption: 'marble'
        },
        d: {
          displayOption: 'meteoroid'
        }
      }
    }, //13

    {
      question: 'The only species of cat that lives and hunts in groups is:',
      choices: {
        a: {
          displayOption: 'lion',
          answer: true
        },
        b: {
          displayOption: 'leopard'
        },
        c: {
          displayOption: 'cougar'
        },
        d: {
          displayOption: 'jaguar'
        }
      }
    }, //14

    {
      question: 'Linen is made from what plant?',
      choices: {
        a: {
          displayOption: 'Wool'
        },
        b: {
          displayOption: 'Flax',
          answer: true
        },
        c: {
          displayOption: 'Abaca'
        },
        d: {
          displayOption: 'Pineapple'
        }
      }
    }, //15

    {
      question: 'What nocturnal animal group makes up one-fourth of all mammals species?',
      choices: {
        a: {
          displayOption: 'Bats',
          answer: true
        },
        b: {
          displayOption: 'Humans'
        },
        c: {
          displayOption: 'Cats'
        },
        d: {
          displayOption: 'Dogs'
        }
      }
    }, //16

    {
      question: 'What is another name for the Paleolithic Age?',
      choices: {
        a: {
          displayOption: 'Stone Age',
          answer: true
        },
        b: {
          displayOption: 'Metal Age'
        },
        c: {
          displayOption: 'Iron Age'
        },
        d: {
          displayOption: 'Dark Age'
        }
      }
    }, //17

    {
      question: 'How many time zones are there on Earth?',
      choices: {
        a: {
          displayOption: '8'
        },
        b: {
          displayOption: '12'
        },
        c: {
          displayOption: '20'
        },
        d: {
          displayOption: '24',
          answer: true
        }
      }
    }, //18

    {
      question: 'What land mammal holds the record for the greatest age?',
      choices: {
        a: {
          displayOption: 'Human',
          answer: true
        },
        b: {
          displayOption: 'Turtle'
        },
        c: {
          displayOption: 'Kangaroo'
        },
        d: {
          displayOption: 'Dolphin'
        }
      }
    }, //19

    {
      question: 'What poisonous alkaloid is extracted from tobacco leaves and widely used as an insecticide?',
      choices: {
        a: {
          displayOption: 'Fiber'
        },
        b: {
          displayOption: 'Pottasium'
        },
        c: {
          displayOption: 'Nicotine',
          answer: true
        },
        d: {
          displayOption: 'Helium'
        }
      }
    }, //20

    {
      question: 'A type of plastic that is biodegradable has been in the news lately. The ingredient that makes it biodegradable is:',
      choices: {
        a: {
          displayOption: 'vegetable oil'
        },
        b: {
          displayOption: 'petroleum'
        },
        c: {
          displayOption: 'cornstarch',
          answer: true
        },
        d: {
          displayOption: 'leather'
        }
      }
    }, //21

    {
      question: 'If a metal can be drawn into wires relatively easily it is called:',
      choices: {
        a: {
          displayOption: 'malleable'
        },
        b: {
          displayOption: 'ductile',
          answer: true
        },
        c: {
          displayOption: 'extractive'
        },
        d: {
          displayOption: 'tactile'
        }
      }
    }, //22

    {
      question: 'In which country was a method for making rust-resistant iron discovered in the fifth century B.C.?',
      choices: {
        a: {
          displayOption: 'Sumeria'
        },
        b: {
          displayOption: 'Egypt'
        },
        c: {
          displayOption: 'India',
          answer: true
        },
        d: {
          displayOption: 'China'
        }
      }
    }, //23

    {
      question: 'At room temperature, most elements are in which phase of matter?',
      choices: {
        a: {
          displayOption: 'Solid',
          answer: true
        },
        b: {
          displayOption: 'Liquid'
        },
        c: {
          displayOption: 'Gas'
        },
        d: {
          displayOption: 'Plasma'
        }
      }
    }, //24

    {
      question: 'What compound is a common component of air pollution, but is essential in the upper atmosphere to protect life on earth?',
      choices: {
        a: {
          displayOption: 'Carbon Dioxide'
        },
        b: {
          displayOption: 'Ozone',
          answer: true
        },
        c: {
          displayOption: 'Fumes'
        },
        d: {
          displayOption: 'Smoke'
        }
      }
    }, //25

  ];
  questionSet: Array<any>;
  userScore = 0;
  userAnswerSheet = [];



  ngOnInit() {
    this.getQuestionSheet();
    this.quizUserAnswer = 'a'; //kini kay para naka choose na daan ang user para dili blanko 
  }

  doneAndProgress() {
    //mao ni ang algo sa pag puli2x or pakita og tago sa mga html elements
    //e.g *ngIf="isAtWelcome" matago to apil iya mga child
    if (this.isAtWelcome) {
      this.isAtWelcome = !this.isAtWelcome;
      this.isAtQuiz = !this.isAtQuiz;
    }
    else if (this.isAtQuiz) {
      this.isAtQuiz = !this.isAtQuiz;
      this.isFinishedAtQuiz = !this.isFinishedAtQuiz;
      //tan-awa lang sa ubos unsa ni nga function
      this.quizProgress();
    }
    else if (this.isFinishedAtQuiz) {
      this.isFinishedAtQuiz = !this.isFinishedAtQuiz;
      this.isAtWelcome = !this.isAtWelcome;
      //dani kay mag reset man, mag new sab og mga sudlanan
      this.getQuestionSheet();
      this.quizNumber = 0;
      this.userScore = 0;
    }

  }

  getUserScoreMessage(userScore) {
    let scorepercentage = userScore * 10;

    if (scorepercentage>=100) {
      return 'Awesome!, you can go to next level';
    } 
    else if (scorepercentage>=75) {
      return 'Not bad at all!';      
    } 
    else if (scorepercentage>=50) {
      return 'You need to review more.';      
    } 
    else if (scorepercentage>=25) {
      return 'Study hard';      
    }

  }

  getQuestionSheet() {
    this.questionSet = this.getQuestionSet();
  }

  getCorrectAnswer(questionNumber) {
    //mao ni para makita ang answer 
    let a = this.questionSheet[questionNumber].choices.a['answer'];
    let b = this.questionSheet[questionNumber].choices.b['answer'];
    let c = this.questionSheet[questionNumber].choices.c['answer'];
    let d = this.questionSheet[questionNumber].choices.d['answer'];

    if (a) {
      return this.questionSheet[questionNumber].choices.a['displayOption'];
      // return a
    }
    else if (b) {
      return this.questionSheet[questionNumber].choices.b['displayOption'];
      // return b
    }
    else if (c) {
      return this.questionSheet[questionNumber].choices.c['displayOption'];
      // return c
    }
    else if (d) {
      return this.questionSheet[questionNumber].choices.d['displayOption']
      // return d
    }


  }

  getQuestionSet() {
    //kani, ang e return ani kay array of numbers
    //kay magkuha man japon og question kay sa questionSheet
    let rng = (Math.floor((Math.random() * this.questionSheet.length) + 0));
    let set = [];

    while (set.length < 10) {
      //dani e check kung naa bay kaparehas
      if (rng == set[set.length - 1] || set.indexOf(rng) != -1) {
        rng = (Math.floor((Math.random() * this.questionSheet.length) + 0));
      } else {
        set.push(rng);
      }

    }

    return set;

  }

  quizProgress() {
    //kuhaon ang answer sa user
    let userAnswer = this.questionSheet[this.questionSet[this.quizNumber]].choices[this.quizUserAnswer]['answer'];
    //dayon e check yung correct ba, 
    //kay ang questionSheet[index].choices[object : a,b,c,d].answer kay boolean man
    if (userAnswer) {
      this.userScore++;
    }
    //dani ge record ang answer ni user, pero wala na nako ni nagamit, hahaha
    this.userAnswerSheet.push(this.quizUserAnswer);

    this.quizNumber++;
  }





}