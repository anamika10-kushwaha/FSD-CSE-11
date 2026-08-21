let ele=document.querySelector(".box").innerHTML;
console.log(ele);//HELLO I am box1
let ele1=document.querySelector(".box").outerHTML;
console.log(ele1);
let ele2=document.querySelectorAll(".box")[1].innerHTML;
console.log(ele2);
let ele3=document.querySelectorAll(".box")[1].outerHTML;
console.log(ele3);
let ele4=document.querySelector(".container").innerHTML;
console.log(ele4);
let ele5=document.querySelector(".container").outerHTML;
console.log(ele5);
let ele6=document.querySelector(".container").innerText;
console.log(ele6);
let name1=document.querySelectorAll(".box")[1].tagName;
console.log(name1);
let name2=document.querySelectorAll(".box")[1].nodeName;
console.log(name2);
let name3=document.querySelectorAll(".box")[1].textContent;
console.log(name3);//it shows
let name4=document.querySelectorAll(".box")[1];
console.log(name4.innerText);//it  not showsl
// let ele=document.querySelector("#uni");
// console.log(ele.innerText);
// console.log(ele.textContent);
