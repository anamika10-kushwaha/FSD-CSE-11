function Book(props){
    const image=React.createElement("img",{src:"props.image",width:"100px",height:"100px"},null);
    const title=React.createElement("h2",{style:{color:"red"}},"Title:"+props.title);
    const price=React.createElement("h2",{style:{color:"green"}}, "price:"+props.price);
    const btn=React.createElement("button",{style:{color:"blue"}},"AddToCart");
    const div=React.createElement("div",{className:"book"},[image,title,price,btn]);
    return div;      
}
const bookdata=[
    {image:"",title:"ReactJS",price:465},
     {image:"",title:"NodeJS",price:565},
      {image:"",title:"ExpressJS",price:265},
      {image:"",title:"MernStack",price:1905},
     {image:"",title:"devops",price:5652},
      {image:"",title:"EcmaScript",price:2655},
];
function App(){
    const bookstore=bookdata.map(
        (b)=>{
            return Book(b);
        }
    )
    const div=React.createElement("div",
        {className:"bookstore"},[...bookstore]
    )
    return div;
}
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(App());