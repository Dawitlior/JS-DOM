// 1.	צרו אלמנט של טקסט ב html עם סטרינג "first dom app"  והדפיסו ללוג את התוכן שלו.
// first_id

// 2.	צרו אלמנט טקסט ב html בלי טקסט וכתבו לתוכו "my dom app" בעזרת JS.
// document.write(h6_id.textContent + "my dom app")

// 3.	צרו 4 אלמנטי טקסט מסוג שונה ב html עם טקסטים שונים והדפיסו אותם ללוג.
// var someVar = document.getElementsByClassName("targil3");
// console.log(someVar);

// 4.	הדפיסו ללוג את האלמנט השני.
// 5.	הדפיסו ללוג את הטקסט של האלמנט השלישי.
// var someVar1 = someVar[1];
// var someVar2 = someVar[2];

// 6.	צרו 4 אלמנטים מאותו סוג ב html עם תוכן שונה והדפיסו אותם ללוג.
// var targil6 = document.getElementsByClassName("someSpan");

// 7.	צרו פונקציה המקבלת מהמשתמש שם והדפיסו אותו למסך בתגית H2.
// function funkyFunction(){
// var userInput = prompt("type some name");
// document.write("<h2>" + userInput + "</h2>");
// }
// funkyFunction();

// 8.	צרו פונקציה המקבלת מהמשתמש צבע ומספר, הדפיסו למסך את הצבע בתגית SPAN מספר הפעמים שהמשתמש הכניס.

// function getInputFromUser(){
//     var userRoundPrompt = prompt("type a number");
//     for(var i = 0 ; i <userRoundPrompt ; i++){
//         var color = prompt("type some color");
//         // var number = +prompt("type some number");
//     }
//     document.write("<br>" +"<span>" + color + "</span>");
// }
// getInputFromUser();

// 9.	צרו פונקציה המקבלת מהמשתמש טקסט ושם תגית ואז בונה את התגית עם הטקסט ב DOM.

// function getFromUserAndBuild(){
// var textFromUser = prompt("type some text");
// var nameTag = prompt("choose open tag <tag>");
// var nameTag1 = prompt("choose close Tag </tag>");
// document.write("<br>" + nameTag + textFromUser + nameTag1)
// }
// getFromUserAndBuild();

// 10.	צרו פונקציה המקבלת מהמשתמש סוג קלט ויוצרת את הקלט המתאים ב DOM.

// function creatTheCorrectInput(){
// var inputType = prompt("write something");
// document.innerHTML = "<input type =" + inputType + "/>"
// }
// creatTheCorrectInput();

// 11.	צרו פונקציה המקבלת כארגומנט שם class וטקסט, הפונקציה משנה את התוכן של כל האלמנטים עם ה class שהתקבל לטקסט שהמשתמש הכניס.

// function someFunction(text,someClass){
// var elementArray =  document.getElementsByClassName (someClass);
// for(var i = 0 ; i<elementArray.length;i++){
//     elementArray[i].innetText = text
// }
// }
// someFunction();

// 12.	צרו 6 אלמנטי P ריקים ב html, צרו פונקציה שמכניסה להם אלמנט SPAN עם טקסט.

// function someFunction(){
// var pArray = document.getElementsByTagName('p');
// for(var i = 0 ; i<pArray.length ; i++){
//     pArray[i].innerHTML = "<span> some random text </span>"
// }
// }
// someFunction();

// 14.	צרו פונקציה המייצרת אובייקט של סרט, עם שם, מספר צפיות, שנה ותמונה. תנו להם ערכים מהמשתמש, הדפיסו למסך את הסרטים בצורה יפה, כולל התמונה, שם - הכי גדול ושנה הכי קטן

// function functionOnMovie() {
//   var movie = {};
//   movie.name = prompt("type name of movie");
//   movie.views = prompt("type number of watch");
//   movie.year = prompt("type the year of the movie");
//   movie.picture = prompt("type URL for the pic");
//   document.body.innerHTML =
//     "<img src=" +
//     movie.picture +
//     " alt=>" +
//     "<br>" +
//     "<h1>" +
//     movie.name +
//     "</h1>" +
//     "<br>" +
//     "<h6>" +
//     movie.year +
//     "</h6>";
// }
// functionOnMovie();

// 15.	צרו אובייקט של עובד, בעזרת קלטים צרו שדות של שם פרטי, שם משפחה, אימייל ומחלקה. ותנו להם ערכים מהמשתמש, הדפיסו את האובייקט למסך, כל ערך באלמנט משלו.

// var employees = {};
// employees.firstName = prompt("type your first name");
// employees.lastname = prompt("type your last name");
// employees.email = prompt("type your email");
// employees.department = prompt("type your departmant");

// document.body.innerHTML =
//   "<p>" +
//   employees.firstName +
//   "</p>" +

//   "<h6>" +
//   employees.lastname +
//   "</h6>" +
  
//   "<span>" +
//   employees.email +
//   "</span>" +

//   "<h3>" +
//   employees.department +
//   "</h3>";


// 16.	צרו פונקציה הקולטת מספר מהמשתמש ומייצרת מספר אובייקטים, על פי הקלט, של בניין, לכל בניין יש שם קבלן, שם חברה, מספר קומות ומספר דירות בקומה. תנו להם ערכים מהמשתמש, הדפיסו כל אובייקט למסך, כל אובייקט באלמנט משלו.


// function creatSomeObjectAndPrint(){
// var userNumber = prompt("type a number");
// for(var i = 0 ; i<userNumber ; i++){
//     var building = {};
//     building.boss = prompt("type the name of the boss");
//     building.company = prompt("type name of company");
//     building.severalFloors = prompt("type the Several floors");
//     building.numberOfApartments = prompt("type the number of the apartmant in every floor");

// }

// document.body.innerHTML = "<h2>" + building.boss + "</h2>" + " " + "<h3>" + building.company + "</h3>" + "" + "<h4>" + building.severalFloors + "</h4>" + "" + "<h5>" + building.numberOfApartments + "</h5>" ;

// }
// creatSomeObjectAndPrint();


// 17.	צרו פונקציה הקולטת מספר מהמשתמש ומייצרת מספר אובייקטים, על פי הקלט, של חנות, לכל חנות יש שם החנות, כתובת, מספר מחלקות ומספר עובדים. תנו להם ערכים מהמשתמש, הדפיסו רק למסך רק חנוית עם מספר עובדים גבוה מ 10, כל אובייקט באלמנט משלו. 









// 19.	צרו רשימה ב html וצרו פונקציה הקולטת מספר מהמשתמש ומייצרת מספר אובייקטים, על פי הקלט, של איש קשר, לכל איש קשר יש שם מלא, חברה, טלפון, נייד ואימייל. תנו להם ערכים מהמשתמש, הדפיסו כל שם של איש קשר לרשימה

// function someFunction(){
// var numOfContecs = +prompt();
// for(var i = 0 ; i<numOfContecs ; i++){
// var contactObject = {
//   fullName: prompt(""),
//   company: prompt(""),
//   phone: +prompt(""),
//   mobile: prompt(""),
//   email: prompt("")
// };
// document.getElementById("myList").innerHTML += "<li>" + contactObject.fullName + "<li>"
// }

// }
// someFunction();

// function printOnlyIfOverSomeAge() {
//   var theUser = {};
//   theUser.firstName = prompt("type your first name");
//   theUser.lastName = prompt("type your last name");
//   theUser.age = prompt("type your age");
//   if (theUser.age > 18) {
//     document.write(
//       "first name:" +
//         theUser.firstName +
//         "last name:" +
//         theUser.lastName +
//         "age:" +
//         theUser.age
//     );

//   }
// }
// printOnlyIfOverSomeAge();
