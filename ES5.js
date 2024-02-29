"use strict";

/* without using charAt() we are getting char by index*/
var str = "Gaurav";
// document.getElementById("p5").innerHTML =  str[1];

/* String over multiple lines */
/*document.getElementById("p5").innerHTML = "Hello \
Dolly!";*/

/* Reserved Words as Property Names */ 
 var obj = {name: "John", new: "yes"};
//document.getElementById("p5").innerHTML = obj.new; 

/* Array.isArray() */
var fruits = ["Apple","Banana", "Orange", "Apple", "Mango"];
// document.getElementById("p5").innerHTML = Array.isArray(fruits);

/* forEach */
let txt = "";
fruits.forEach(displayFruit);
function displayFruit(value){
    txt = txt + value + "<br>";
}
// document.getElementById("p5").innerHTML = txt;

/* Map */
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(getModifiedNumber);
function getModifiedNumber(value){
    return value * 2;
}

//document.getElementById("p5").innerHTML = numbers2;

/* Reduce */
var sum = numbers1.reduce(getSumOfNumbers);
function getSumOfNumbers(total,value){
    return total + value;
}
//document.getElementById("p5").innerHTML = sum;

/* Every */
var allOver18  = numbers1.every(isAllOver18);
function isAllOver18(value){
    return value > 18; 
}
// document.getElementById("p5").innerHTML = allOver18;

/* some */
var anyoneOver18 = numbers1.some(isAnyoneOver18);
function isAnyoneOver18(value){
    return value > 18;
}
//document.getElementById("p5").innerHTML = anyoneOver18;

/* indexOf() */
var index = fruits.indexOf("Apple");
//document.getElementById("p5").innerHTML = index; 

/* lastIndexOf() */
var lastIndex = fruits.lastIndexOf("Apple");
//document.getElementById("p5").innerHTML = lastIndex; 

/* parse String data to json */
var empStr =  '{"name":"John", "age":30, "city":"New York"}';
var empJson = JSON.parse(empStr);
//console.log(empStr);
//console.log(empJson);

/* parse json format data into String */
var empJson =  {"name":"John", "age":30, "city":"New York"};
var empStr = JSON.stringify(empJson);
//console.log(empJson);
//console.log(empStr);

/* Json date */
var date = new Date();
//console.log(date.toJSON());

/* Getter and setter example */
var person = {
    firstname :'johan',
    lastname :'siddle',
    get getfirstname() {
        return this.firstname ;
    },
    set getfirstname(value){
        this.firstname = value;
    }
}

//console.log('firstname name is: ' + person.getfirstname);
person.getfirstname = 'Peter';
//console.log('After set firstname name is: ' + person.getfirstname);

/* define property */
var person1 = {
    firstName: "John",
    lastName : "Doe",
    language : "NO", 
};

Object.defineProperty(person1,'language',{
    value :'EN',
    enumerable : true,
    configurable : true,
    writable : true
});

// Enumerate Properties
var txt1 = "";
for (var x in person1) {
  txt1 += person1[x] + "<br>";
}
//document.getElementById("p5").innerHTML = txt1;

var person2 = {
    firstName: "John",
    lastName : "Doe",
    language : "NO", 
};

Object.defineProperty(person2, "language", {
    value: "EN",
    writable : true,
    enumerable : false,
    configurable : true
  });
var txt2 = "";
for (var x in person2) {
  txt2 += person2[x] + "<br>";
}
document.getElementById("p5").innerHTML = txt2;

/* define property with getter and setter */
var person3 = {
    firstName: "John",
    lastName : "Doe",
    language : "NO", 
};

Object.defineProperty(person3,'language',{
    get language(){
        return this.language;
    },
    set language(value){
        this.language = value;
    }
});

//console.log(person3.language);
person3.language = 'IN';
//console.log(person3.language);

/* Bind() borrow the method from another function */
const person4 = {
    firstName :'Linda',
    lastName :'Joseph',
    fullName : function(){
        return this.firstName + ' ' + this.lastName;
    }
}

const member = {
    firstName :'Linda',
    lastName :'Joseph'
}
console.log(member);
const fullName = person4.fullName.bind(member);
console.log(fullName());