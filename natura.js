let anteba =() =>{
   document. getElementById("natura").src ="img/on.png" 
}
let chaqroba =()=>{
    document.getElementById("natura"). src="img/off.png"
}
let universal = ()=>{
    let misamarti=document.getElementById("natura").src;
    console.log(misamarti);
    if(misamarti=="file:///C:/Users/user/Desktop/light/img/off.png")
    document.getElementById("natura").src = "img/on.png";
    
    else{
     
        document.getElementById("natura").src= "img/off.png";
        document.getElementById("universal").innerHTML="ანთება";
    }
}