let containers2=document.getElementsByClassName("container");//use loops not for each
let containers=document.querySelectorAll(".container");
console.log(containers);//return two div
let another=document.getElementsByClassName("one");
let another2=document.querySelector(".one");
console.log(another);//return one div
//we cannot appying styling in html collection in whole class
// containers.style.backgroundColor="red";--->wrong
containers[0].style.backgroundColor="red";
//if i want to access whole html collection then do by using forEach loop
containers.forEach(element => { //possible only with queryselectorall
    console.log(element);
});
//matches also only work with element not with whole html collection
//matches
let match1=another[0].matches(".one");//true
console.log(match1);
let match2=containers2[1].matches(".container");//true
console.log(match2);
let match3=document.getElementById("two").matches(".two");//false
console.log(match3);
let close=containers2[0].matches(".one");
console.log(close);//return false
//closest
let close2=containers2[0].closest(".one");
console.log(close2);//return div body
let close3=containers2[0].closest("html");
console.log(close3);//return html
//contains

let cont1=another[0].contains(another2);
console.log(cont1);//return true
let cont2=another2.contains(containers[0]);
console.log(cont2);//true
let cont3=containers2[0].contains(another[0]);
console.log(cont3);//false
let cont4=another[0].contains(document.getElementsByTagName("body"));
console.log(cont4);//gives error because it also gives html collection
let cont5=another[0].contains(document.getElementById("how"));
console.log(cont4);//false 