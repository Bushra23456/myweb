let btn =document.getElementById('btn-main');
let nav =document.getElementById('navbar');
let body = document.getElementById('body');
let about = document.getElementById('about');




 btn.addEventListener('click' , copy);
 function copy(){
    if(btn.textContent.includes('Light')){
        nav.className = "navbar navbar-expand-lg navbar-light bg-light";
        btn.textContent = "Dark Mode";
        btn.className = "btn btn-outline-success";
        body.style.backgroundColor = "white";
        about.style.color = "white";


    
    }
    else{
        nav.className = "navbar navbar-expand-lg navbar-dark bg-dark";
        btn.textContent = "Light Mode";
        btn.className = "btn btn-outline-light";
        body.style.backgroundColor = "black";
        about.style.color = "white";

        
    }

}