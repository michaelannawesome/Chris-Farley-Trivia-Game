

const resetButton = document.querySelector("#reset");
const startButton = document.querySelector("#beginBut");
const triviaBox = document.querySelector(".questionBox");

const ansA = document.getElementById('#choiceA');
const ansB = document.getElementById('#choiceB');
const ansC = document.getElementById('#choiceC');
const ansD = document.getElementById('#choiceD');

startButton.addEventListener("click", beginGame)
function beginGame(){
  startButton.style.display ='none';
  getQuest();
  triviaBox.style.display= "block";
}



resetButton.addEventListener("click", function() {
  alert("Okey Dokey!");
});

// startButton.addEventListener("click", startTrivia() {
//   alert("game started!");
// });



let questions = [
  { question: "Finish this quote: “Brothers don’t shake hands. Brothers _____",
    choiceA: "gotta dance.",
    choiceB: "gotta kiss.",
    choiceC: "gotta hug.",
    choiceD: "gotta take DNA tests.",
    correct: "C"

  },
  { question: "How many movies did Chris Farley make with David Spade?",
    choiceA: "One",
    choiceB: "Two",
    choiceC: "Four",
    choiceD: "Five",
    correct: "B"

  },
  { question: "Chris Farley had a cameo in all of these movies EXCEPT:",
    choiceA: "Austin Powers",
    choiceB: "Wayne's World",
    choiceC: "Billy Madison",
    choiceD: "Coneheads",
    correct: "A"

  },
  { question: "Chris Farley’s famous Bear’s fan character, Bill Swerski, has had how many heart attacks?",
    choiceA: "Six",
    choiceB: "Too many to count",
    choiceC: "A baker’s dozen",
    choiceD: "It’s not a heart attack, just a minor blockage",
    correct: "C"

  },
  { question: "Finish this quote: “I am 35 years old, thrice divorced, and_______",
    choiceA: "I sell sandwiches to tourists.",
    choiceB: "I live in a van down by the river!",
    choiceC: "lay off, I’m starving!",
    choiceD: "my diet starts Monday!",
    correct: "B"

  },
  { question: "Who did all of Chris Farley’s stunts?",
    choiceA: "Himself",
    choiceB: "David Spade",
    choiceC: "His look-a-like brother, Kevin Farley",
    choiceD: "Kansas City Chiefs' quarterback Joe Montana",
    correct: "A"

  },
  { question: "What rock band wrote the song \'Purple Stain\' with the lyric \'Farley is an angel and I can prove this\', as a tribute?",
    choiceA: "Red Hot Chili Peppers",
    choiceB: "Blink 182",
    choiceC: "Bush",
    choiceD: "Sublime",
    correct: "A"

  },
  { question: "What tv show based on a popular book series was shelved permanently as the author only wanted Chris to play the lead?",
    choiceA: "Goosebumps",
    choiceB: "Wayside Stories",
    choiceC: "Holes",
    choiceD: "Captain Underpants",
    correct: "D"

  },
  { question: "What profession did Chris claim when approaching women?",
    choiceA: "Hypnotherapist",
    choiceB: "Brake pad salesman",
    choiceC: "Dentist",
    choiceD: "Aerobics Instructor",
    correct: "D"

  },
  { question: "What was Chris Farley’s dream bio pic role?",
    choiceA: "John Belushi",
    choiceB: "Newt Gingrich",
    choiceC: "Roscoe 'Fatty' Arbuckle",
    choiceD: "Oliver Hardy (Laurel & Hardy)",
    correct: "C"

  },
];


let lastTrivia = questions.length-1;
let currentQuest = 0;

function getQuest (){
  let q = questions[currentQuest];
  quest.innerHTML = "<h3>" + q.questions + "</h3>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}
getQuest() 
currentQuest++
 getQuest();

 function validateAns (answer) {
   if (questions[currentQuest].correct===answer){
     score++;
     answerRight();
   }else {
     answerWrong();
   }
  //  if(currentQuest < lastTrivia) {
  //    count = 0;
     currentQuest++;
   }
   }

   }
 }
// let num = questions.length -1
// console.log(num)

// const questionBox = document.querySelector("#questionBox")

// // insert innerHTML
// questionBox.innerHTML = `Question: ${questions[num].question}`
    
// const choiceA = document.querySelector('#choiceA');
// choiceA.innerHTML = `A. ${questions[num].choiceA}`

// const choiceB = document.querySelector('#choiceB');
// choiceB.innerHTML = `B. ${questions[num].choiceB}`

// const choiceC = document.querySelector('#choiceC');
// choiceC.innerHTML = `C. ${questions[num].choiceC}`

// const choiceD = document.querySelector('#choiceD');
// choiceD.innerHTML = `D. ${questions[num].choiceD}`


// function startTrivia () {

// }

// function nextQuestion() {

// }

// function answer (){
  
// }