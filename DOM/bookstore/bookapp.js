const bookData=[
    {image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1618144361i/57693957.jpg",price:465},
    {image:"https://tse3.mm.bing.net/th/id/OIP.YBK0JxuerkA1qxac0pgVPQAAAA?r=0&pid=ImgDet&w=178&h=196&c=7&dpr=1.5&o=7&rm=3",price:723},
    {image:"https://m.media-amazon.com/images/I/81CO1XRAgxL._SL1500_.jpg",price:389},
];let cart=[];
function book(props){
const div=document.createElement("div");
div.setAttribute("class","card");
const image=document.createElement("img");
image.setAttribute("src",props.image);
image.setAttribute("height","100px");
image.setAttribute("width","100px");
const h2=document.createElement("h1");
h2.innerText="Price:₹"+props.price;
const bt=document.createElement("button");
bt.innerText="Add to Cart";
bt.onClick=()=>{
    addTOcart(props);
}
div.appendChild(image);
div.appendChild(h2);
div.appendChild(bt);
return div;
}
function addTOcart(data){
    cart.push(data);
    console.log(data,"data added successfully");
    alert("book added successfully");
}
const bookstore=bookData.map(i=>book(i));
let parent=document.getElementById("root");
for(let b of bookstore){
    parent.appendChild(b);
}

