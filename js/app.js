'use strict';
let score = 0;
let userName = prompt('What\'s Your Name ?');
console.log(typeof userName);
alert('welcome  ' + userName);

let userMajor = prompt('Am I in an IT major?');
switch (userMajor) {
    case 'yes':
    case 'y':
        alert('Correct');
        score++;
        console.log(userMajor);
        break;
    case 'no':
    case 'n':
        alert('thats incorrect');
        break;
    default:
        alert('pleas enter Lower case onley');
}

let secondQuestion = prompt('Am I currntly an employee?');
secondQuestion.toLowerCase;
switch (secondQuestion) {
    case 'yes':
    case 'y':
        //console.log(secondQuestion);
        alert('Unfortantly Am not an employee');
        break;
    case 'no':
    case 'n':
        console.log(secondQuestion);
        alert('That\'s correct');
        score++;
        break;
    default:
        alert('pleas enter Lower case onley');
}

let thirdQuestion = prompt('do I like to read Books?');
thirdQuestion.toLowerCase;
//console.log(thirdQuestion);
switch (thirdQuestion) {
    case 'yes':
    case 'y':
        alert('Thats True Books are My favourite!');
        score++;
        break;
    case 'no':
    case 'n':
        alert('Sadly thats not correct');
        break;
    default:
        alert('pleas enter Lower case onley');
}

let forthQuestion = prompt('Am I using Windows?');
forthQuestion.toLowerCase;
//console.log(forthQuestion);
switch (forthQuestion) {
    case 'yes':
    case 'y':
        alert('Thats True I have a windows');
        score++;
        break;
    case 'no':
    case 'n':
        alert('Am afraid That\'s Incorrect ');
        break;
    default:
        alert('pleas enter Lower case onley');
}

let fifthQuestion = prompt('Do I use BING as a search engine?');
fifthQuestion.toLowerCase;
//console.log(fifthQuestion);
switch (fifthQuestion) {
    case 'yes':
    case 'y':
        alert('No,Google is my favourite');
        break;
    case 'no':
    case 'n':
        alert('Correct, you must be using it too!');
        break;
    default:
        alert('pleas enter Lower case onley');
}

alert('Thank You  ' + userName);


let sixthQuestion = prompt('Let\'s play a game ! I want you to guess a number, if you guessed right you win, if you didn\'t..... rembermber you have 4 trials!!');
sixthQuestion = Number(sixthQuestion);
console.log(sixthQuestion);
if (sixthQuestion < 3) {
    alert('wrong answer you have 4 try');
    for (let i = 0; i < 4; i++) {
        alert('too low');
        if (sixthQuestion == 3) {
            alert('correct');
        } else {
            sixthQuestion = prompt('try again');
        }
    }
}
else if (sixthQuestion > 3) {
    alert('too High');
    for (let i = 0; i < 4; i++) {
        if (sixthQuestion == 3) {
            alert('correct');
        } else {
            sixthQuestion = prompt('try again');
        }

    }
}
alert('correct aswer is 3');


let color = ['red','blue','gree','yellow'];
let guess = prompt('whats y faourite colot?red blue yellow?');
for(let i=0;i<6;i++){
    if(guess === 'red'){
        alert('correct');
        score ++;
        break;
    }else {
        alert('tryagain');
        guess=prompt('guess again');
    }
    
    }
    alert('you have scored '+ score);

