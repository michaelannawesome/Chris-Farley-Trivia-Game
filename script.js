//grabbing all elements

let ul = document.getElementById('ul')
let nextButton = document.getElementById('nextBut');
let quesBox = document.getElementById('questionBox')
let a = document.getElementById('a')
let b = document.getElementById('b')
let c = document.getElementById('c')
let d = document.getElementById('d')

//Questions Array
const arr = {
        questions:[
            {
                q:"Finish this quote: “Brothers don’t shake hands. Brothers _____",
                choices: ["gotta dance.","gotta kiss.","gotta hug.","gotta take DNA tests."],
                answer:3
            },
            {
                q:"How many movies did Chris Farley make with David Spade?",
                choices: ['One','Two', 'Four', "Five"],
                answer:2
            },    
            {
                q:"Chris Farley had a cameo in all of these movies EXCEPT:",
                choices: ["Austin Powers", "Wayne’s World", "Billy Madison", "Coneheads"],
                answer:1
            },
            {
                q:"Chris Farley’s famous Bear’s fan character, Bill Swerski, has had how many heart attacks?",
                choices: ['Six',"Too many to count", "A baker’s dozen", "It’s not a heart attack, just a minor blockage"],
                answer:3
            },   
            {
                q:"Finish this quote: I am 35 years old, thrice divorced, and_______",
                choices: ["I sell sandwiches to tourists.", "I live in a van down by the river!", "lay off, I’m starving!", "my diet starts Monday!"],
                answer:2
            },
            {
                q:"Who did all of Chris Farley’s stunts?",
                choices: ["Himself","David Spade", "His look-a-like brother, Kevin Farley", "Kansas City Chiefs' quarterback Joe Montana"],
                answer:1
            },    
            {
                q:"What rock band wrote the song \'Purple Stain\' with the lyric \'Farley is an angel and I can prove this\', as a tribute?",
                choices: ["Red Hot Chili Peppers", "Blink 182", "Bush", "Sublime"],
                answer:1
            },
            {
                q:"What tv show based on a popular book series was shelved permanently as the author only wanted Chris to play the lead?",
                choices: ["Goosebumps","Wayside Stories", "Holes", "Captain Underpants"],
                answer:4
            },    
            {
                q:"What profession did Chris claim when approaching women?",
                choices: ["Hypnotherapist", "Brake pad salesman","Dentist", "Aerobics Instructor"],
                answer:4
            },
            {
                q:"What was Chris Farley’s dream bio pic role?",
                choices: ["John Belushi","Newt Gingrich", "Roscoe 'Fatty' Arbuckle",  "Oliver Hardy (Laurel & Hardy)"],
                answer:3
            }             
        ],
    
        
        index:0,
        load:function(){
            if(this.index<=this.questions.length-1){
                quesBox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                a.innerHTML=this.questions[this.index].choices[0];
                b.innerHTML=this.questions[this.index].choices[1];
                c.innerHTML=this.questions[this.index].choices[2];
                d.innerHTML=this.questions[this.index].choices[3];
            }
            else {
                quesBox.innerHTML="Your Brain has a shell on it!";
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        
// let lastTrivia = questions.length-1;
// let currentQuest = 0;
// let score = 0;


// //create function that will run the questions
// function getQuest (){
//   let q = questions[currentQuest];
//   //gets qustion from Array and displays it in h3
//   quest.innerHTML = "<h3>" + q.question + "</h3>";
//   choiceA.innerHTML = q.choiceA;
//   choiceB.innerHTML = q.choiceB;
//   choiceC.innerHTML = q.choiceC;
//   choiceD.innerHTML = q.choiceD;
// }





//  function validate(answer) {
//    //check if answer is correct
//    if (answer=== questions[currentQuest].correct){
//      //if so, increase by 1
//      score++;
//      answerRight();
//    }else {
//      answerWrong();
//    }
//    if(currentQuest < lastTrivia) {
 
//      currentQuest++;
//      getQuest();
//    } else {
//      showScore()
//    }
//    }
   

//    function answerRight() {
//      document.getElementById(currentQuest).style.img= url(Chris.jpg);
//    }

//    function answerWrong() {
//     document.getElementById(currentQuest).style.img= url(ChrisWrong.jpg);
//   }
   
 

//  const showScore = () => {
//   score ++;
//   console.log(score);
//   document.querySelector("#score").innerText = score;
//   scoreBox.style.display = "block";
//   // if (score ===100) {
//   //     const winner = document.querySelector('.level-winner')
//   //     winner.style.opacity = 1 
//   // }
// };
