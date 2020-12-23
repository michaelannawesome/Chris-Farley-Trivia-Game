//grabbing all elements

const ul = document.getElementById("ul");
const forward = document.getElementById("nextBut");
const quesBox = document.getElementById("questionBox");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");

//Questions Array by turinging into an Object
var arr = {
  questions: [
    {
      qts: "Finish this quote: “Brothers don’t shake hands. Brothers _____",
      choices: [
        "gotta dance.",
        "gotta kiss.",
        "gotta hug.",
        "gotta take DNA tests.",
      ],
      answer: 3,
    },
    {
      qts: "How many movies did Chris Farley make with David Spade?",
      choices: ["One", "Two", "Four", "Five"],
      answer: 2,
    },
    {
      qts: "Chris Farley had a cameo in all of these movies EXCEPT:",
      choices: ["Austin Powers", "Wayne’s World", "Billy Madison", "Coneheads"],
      answer: 1,
    },
    {
      qts:
        "Chris Farley’s famous Bear’s fan character, Bill Swerski, has had how many heart attacks?",
      choices: [
        "Six",
        "Too many to count",
        "A baker’s dozen",
        "It’s not a heart attack, just a minor blockage",
      ],
      answer: 3,
    },
    {
      qts: "Finish this quote: I am 35 years old, thrice divorced, and_______",
      choices: [
        "I sell sandwiches to tourists.",
        "I live in a van down by the river!",
        "lay off, I’m starving!",
        "my diet starts Monday!",
      ],
      answer: 2,
    },
    {
      qts: "Who did all of Chris Farley’s stunts?",
      choices: [
        "Himself",
        "David Spade",
        "His look-a-like brother, Kevin Farley",
        "Kansas City Chiefs' quarterback Joe Montana",
      ],
      answer: 1,
    },
    {
      qts:
        "What rock band wrote the song 'Purple Stain' with the lyric 'Farley is an angel and I can prove this', as a tribute?",
      choices: ["Red Hot Chili Peppers", "Blink 182", "Bush", "Sublime"],
      answer: 1,
    },
    {
      qts:
        "What tv show based on a popular book series was shelved permanently as the author only wanted Chris to play the lead?",
      choices: ["Goosebumps", "Wayside Stories", "Holes", "Captain Underpants"],
      answer: 4,
    },
    {
      qts: "What profession did Chris claim when approaching women?",
      choices: [
        "Hypnotherapist",
        "Brake pad salesman",
        "Dentist",
        "Aerobics Instructor",
      ],
      answer: 4,
    },
    {
      qts: "What was Chris Farley’s dream bio pic role?",
      choices: [
        "John Belushi",
        "Newt Gingrich",
        "Roscoe 'Fatty' Arbuckle",
        "Oliver Hardy (Laurel & Hardy)",
      ],
      answer: 3,
    },
  ],

  //starting the index at 0
  index: 0,

  // on 'load', start this function
  start: function () {
    //if the it is not the last question load the following:
    if (this.index <= this.questions.length - 1) {
      //Grab the box that holds questions and display the question w/options
      // quesBox.innerHTML = this.index +1 + ". " + this.questions[this.index].qts;
      quesBox.innerHTML =
        this.index + 1 + ". " + this.questions[this.index].qts;
      //Replace inside the HTML the choices that go with the given question.
      opt1.innerHTML = this.questions[this.index].choices[0];
      opt2.innerHTML = this.questions[this.index].choices[1];
      opt3.innerHTML = this.questions[this.index].choices[2];
      opt4.innerHTML = this.questions[this.index].choices[3];
      //when all questions have run, display this:
    } else {
      quesBox.innerHTML =
        "Remember when you played that game? That was awesome!";
      //stop displaying the questions and options
      ul.style.display = "none";
      //stop displaying "next" button
      forward.style.display = "none";
    }
  },

  //the function for the next button
  next: function () {
    //take the current question and move one forward
    this.index++;
    //then run the start function again
    this.start();
  },

  // function for checking if the answer is right or wrong
  // use the element as parameter
  validate: function (element) {
    //
    var id = element.id.split("");
    //grabs a question as long as there is one left and checks answer
    if (id[id.length - 1] == this.questions[this.index].answer) {
      //increase the score by 1 if it's correct
      this.score++;
      //applies class name of "correct" so it will change color in css
      element.className = "correct";
      //run the points function after checking the answer
      this.points();
      //When this is complete run this next:
    } else {
      //applies classname so it will change color in CSS
      element.className = "wrong";
    }
  },

  //function to not allow multiple answers or to change answers
  stopClick: function () {
    for (let i = 0; i < ul.children.length; i++) {
      //looks through all children of the list item and prevents the click
      ul.children[i].style.pointerEvents = "none";
    }
  },
  //function that does the opposite of above
  allowClick: function () {
    for (let i = 0; i < ul.children.length; i++) {
      //allows click if nothing has been selected.
      ul.children[i].style.pointerEvents = "auto";
      ul.children[i].className = "";
    }
  },

  //start score at 0
  score: 0,
  //function that inserts the score inside the HTML
  points: function () {
    pointsAmt.innerHTML = this.score;
  },
};
//When the window opens run the game and diplay the questions
window.start = arr.start();

//this function calls the 2 above functions to run upon click
function button(element) {
  arr.validate(element);
  arr.stopClick();
}

//function that allows the next button to run the function that moves to questions forward
function next() {
  arr.next();
  arr.allowClick();
}