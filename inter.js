let btn =document.getElementById('btn-main');
let nav =document.getElementById('navbar');
let body = document.getElementById('body');
let head = document.getElementById('heading');
let today = document.getElementById('today');
let have = document.getElementById('have');
let important = document.getElementById('important');
let cold = document.getElementById('cold');
let inner = document.getElementById('inner');
let talk = document.getElementById('talk');
let told = document.getElementById('told');
let some = document.getElementById('some');





 btn.addEventListener('click' , copy);
 function copy(){
    if(btn.textContent.includes('Light')){
        nav.className = "navbar navbar-expand-lg navbar-light bg-light";
        btn.textContent = "Dark Mode";
        btn.className = "btn btn-outline-success";
        body.style.backgroundColor = "white";
        head.style.color = "black";
        today.style.backgroundColor = "black";
        today.style.color = "white";
        have.style.backgroundColor = "black";
        have.style.color = "white";
        important.style.backgroundColor = "black";
        important.style.color = "white";
        cold.style.backgroundColor = "black";
        cold.style.color = "white";
        inner.style.backgroundColor = "black";
        inner.style.color = "white";
        talk.style.backgroundColor = "black";
        talk.style.color = "white";
        told.style.backgroundColor = "black";
        told.style.color = "white";
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
        today.style.backgroundColor = "white";
        today.style.color = "black";
        have.style.backgroundColor = "white";
        have.style.color = "black";
        important.style.backgroundColor = "white";
        important.style.color = "black";
        cold.style.backgroundColor = "white";
        cold.style.color = "black";
        inner.style.backgroundColor = "white";
        inner.style.color = "black";
        talk.style.backgroundColor = "white";
        talk.style.color = "black";
        told.style.backgroundColor = "white";
        told.style.color = "black";
        some.style.backgroundColor = "white";
        some.style.color = "black";
        some.style.textAlign = "center";
    }

}