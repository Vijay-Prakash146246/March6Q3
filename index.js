//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.
scopeData=[{
     p1:"Scope determines the accessibility (visibility) of variables.",
     p2:"JavaScript had Block scope ,Global Scope and Function Scope.",
     p3:"let and const keywords provide Block Scope in JavaScript.",
     p4:"Variables declared with the var keyword can NOT have block scope.",
     p5:"A variable declared outside a function, becomes GLOBAL.",
     p6:"Global variables can be accessed from anywhere in a JavaScript program.",
}];

localStorage.setItem("scope",JSON.stringify(scopeData));
// console.log(scopeData);
document.querySelector("#scope").addEventListener("click",scopeFun);
var scopeData1=JSON.parse(localStorage.getItem("scope"))||[];
function scopeFun()
{
display(scopeData1);

}


hostingData=[{
     p1:"Hoisting is JavaScript's default behavior of moving declarations to the top.",
     p2:"Variables defined with let and const are hoisted to the top of the block, but not initialized.",
     p3:"Using a let variable before it is declared will result in a ReferenceError.",
     p4:"Using a const variable before it is declared, is a syntax errror, so the code will simply not run.",
     p5:"Using a const variable before it is declared, is a syntax errror, so the code will simply not run.",
     p6:"In JavaScript, a variable can be declared after it has been used.",
}];

localStorage.setItem("hoisting",JSON.stringify(hostingData));
// console.log(scopeData);
document.querySelector("#hoisting").addEventListener("click",hoistingFun);
var hoistingData1=JSON.parse(localStorage.getItem("hoisting"))||[];
function hoistingFun()
{
display(hoistingData1);

}


constructorfunctionsData=[{
     p1:"It is considered good practice to name constructor functions with an upper-case first letter.",
     p2:"In a constructor function this does not have a value.",
     p3:"The value of this will become the new object when a new object is created.",
     p4:"The way to create an object-type, is to use an object constructor function.",
     p5:"In JavaScript, the this keyword refers to an object.",
     p6:"this is not a variable. It is a keyword. You cannot change the value of this",
}];

localStorage.setItem("constructorfunctions",JSON.stringify(constructorfunctionsData));
// console.log(scopeData);
document.querySelector("#constructorfunctions").addEventListener("click",constructorfunctionsFun);
var constructorfunctionsData1=JSON.parse(localStorage.getItem("constructorfunctions"))||[];
function constructorfunctionsFun()
{
display(constructorfunctionsData1);

}



prototypeData=[{
     p1:"All JavaScript objects inherit properties and methods from a prototype.",
     p2:"you can not add a new property to an existing object constructor",
     p3:"Date objects inherit from Date.prototype",
     p4:"Person objects inherit from Person.prototype",
     p5:"The JavaScript prototype property allows you to add new properties to object constructors:",
     p6:"Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.",
}];

localStorage.setItem("prototype",JSON.stringify(prototypeData));
// console.log(scopeData);
document.querySelector("#prototype").addEventListener("click",prototypeFun);
var prototypeData1=JSON.parse(localStorage.getItem("prototype"))||[];
function prototypeFun()
{
display(prototypeData1);

}





function display(arr)
{
arr.map(function(el,i,arr){
     var box=document.createElement("div");
    var p1=document.createElement("p");
    p1.innerText=el.p1;
    var p2=document.createElement("p");
    p2.innerText=el.p2;
    var p3=document.createElement("p");
    p3.innerText=el.p3;
    var p4=document.createElement("p");
    p4.innerText=el.p4;
    var p5=document.createElement("p");
    p5.innerText=el.p5;
    var p6=document.createElement("p");
    p6.innerText=el.p6;
    var hr1=document.createElement("hr");
    box.append(p1,p2,p3,p4,p5,p6,hr1);
    document.querySelector("h5").append(box);

});
}
