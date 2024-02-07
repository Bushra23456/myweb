let btn =document.getElementById('btn-main');
let nav =document.getElementById('navbar');
let body = document.getElementById('body');
let head = document.getElementById('heading');
let details = document.getElementById('Details');
let some = document.getElementById('some');



 btn.addEventListener('click' , copy);
 function copy(){
    if(btn.textContent.includes('Light')){
        nav.className = "navbar navbar-expand-lg navbar-light bg-light";
        btn.textContent = "Dark Mode";
        btn.className = "btn btn-outline-success";
        body.style.backgroundColor = "white";
        head.style.color = "black";
        details.style.color = "black";
        details.style.textAlign = "center";
        some.style.backgroundColor = "black";
        some.style.color = "white";
        some.style.textAlign = "center";
        
    
    }
    else{
        nav.className = "navbar navbar-expand-lg navbar-dark bg-dark";
        btn.textContent = "Light Mode";
        btn.className = "btn btn-outline-light";
        body.style.backgroundColor = "black";
        head.style.color = "white";
        details.style.color = "white";
        details.style.textAlign = "center";
        some.style.backgroundColor = "white";
        some.style.color = "black";
        some.style.textAlign = "center";
       
         
    }

}