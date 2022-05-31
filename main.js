// 1.	צרו אלמנט של טקסט ב html עם סטרינג "first dom app"  והדפיסו ללוג את התוכן שלו.
first_id



// 2.	צרו אלמנט טקסט ב html בלי טקסט וכתבו לתוכו "my dom app" בעזרת JS.
document.write(h6_id.textContent + "my dom app")


// 3.	צרו 4 אלמנטי טקסט מסוג שונה ב html עם טקסטים שונים והדפיסו אותם ללוג.
var someVar = document.getElementsByClassName("targil3");
console.log(someVar);

// 4.	הדפיסו ללוג את האלמנט השני.
// 5.	הדפיסו ללוג את הטקסט של האלמנט השלישי.
var someVar1 = someVar[1];
var someVar2 = someVar[2];


// 6.	צרו 4 אלמנטים מאותו סוג ב html עם תוכן שונה והדפיסו אותם ללוג.
var targil6 = document.getElementsByClassName("someSpan");


// 7.	צרו פונקציה המקבלת מהמשתמש שם והדפיסו אותו למסך בתגית H2.
function funkyFunction(){
var userInput = prompt("type some name");
document.write("<h2>" + userInput + "</h2>");
}
funkyFunction();

// 8.	צרו פונקציה המקבלת מהמשתמש צבע ומספר, הדפיסו למסך את הצבע בתגית SPAN מספר הפעמים שהמשתמש הכניס.

function getInputFromUser(){
    var userRoundPrompt = prompt("type a number");
    for(var i = 0 ; i <userRoundPrompt ; i++){
        var color = prompt("type some color");
        // var number = +prompt("type some number");
    }
    document.write("<br>" +"<span>" + color + "</span>");
}
getInputFromUser();


// 9.	צרו פונקציה המקבלת מהמשתמש טקסט ושם תגית ואז בונה את התגית עם הטקסט ב DOM.

function getFromUserAndBuild(){
var textFromUser = prompt("type some text");
var nameTag = prompt("choose open tag <tag>");
var nameTag1 = prompt("choose close Tag </tag>");
document.write("<br>" + nameTag + textFromUser + nameTag1)
}
getFromUserAndBuild();



// 10.	צרו פונקציה המקבלת מהמשתמש סוג קלט ויוצרת את הקלט המתאים ב DOM.

function creatTheCorrectInput(){
var inputType = prompt("write something");
document.innerHTML = "<input type =" + inputType + "/>"
}
creatTheCorrectInput();




// 11.	צרו פונקציה המקבלת כארגומנט שם class וטקסט, הפונקציה משנה את התוכן של כל האלמנטים עם ה class שהתקבל לטקסט שהמשתמש הכניס.

function someFunction(text,someClass){
var elementArray =  document.getElementsByClassName (someClass);
for(var i = 0 ; i<elementArray.length;i++){
    elementArray[i].innetText = text
}
}
someFunction();



// 12.	צרו 6 אלמנטי P ריקים ב html, צרו פונקציה שמכניסה להם אלמנט SPAN עם טקסט.

function someFunction(){
var pArray = document.getElementsByTagName('p');
for(var i = 0 ; i<pArray.length ; i++){
    pArray[i].innerHTML = "<span> some random text </span>"
}
}
someFunction();



// 19.	צרו רשימה ב html וצרו פונקציה הקולטת מספר מהמשתמש ומייצרת מספר אובייקטים, על פי הקלט, של איש קשר, לכל איש קשר יש שם מלא, חברה, טלפון, נייד ואימייל. תנו להם ערכים מהמשתמש, הדפיסו כל שם של איש קשר לרשימה

function someFunction(){
var numOfContecs = +prompt();
for(var i = 0 ; i<numOfContecs ; i++){
var contactObject = {
  fullName: prompt(""),
  company: prompt(""),
  phone: +prompt(""),
  mobile: prompt(""),
  email: prompt("")
};
document.getElementById("myList").innerHTML += "<li>" + contactObject.fullName + "<li>"
}

}
someFunction();






function printOnlyIfOverSomeAge(){
var theUser = {}
theUser.firstName = prompt("type your first name");
theUser.lastName = prompt("type your last name");
theUser.age = prompt("type your age");
if(theUser.age >18){
    
}



}
printOnlyIfOverSomeAge();





