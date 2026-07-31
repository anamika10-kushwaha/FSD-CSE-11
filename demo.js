// const student={
//     name:"ashu",
//     age:29,
//     branch:"CSE"
// }
// const newStudent={
//     ...student,  //rest destructuring
//     sec:"A"
// }
// console.log("new object name=",newStudent.name);
// console.log("new object age=",newStudent.age);
// console.log("new object branch=",newStudent.branch);
// console.log("new object section=",newStudent.sec);
//import & export
function sum ( ...num){
    const sum=num.reduce((s,i)=>(s+i));
    return sum;
}
const add=(...num)=>{
    let s=0;
    for(let i of num){
        s=s+i;
    }
    return s;
}



export {sum,add};
// export default sum;
