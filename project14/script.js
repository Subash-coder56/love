const b = document.querySelector('button.btn-no')
b.addEventListener("mouseover",moveHover);


let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open");
}

function closePopup() {
    popup.classList.remove("open");
}



function moveHover(){
    const i = Math.floor(Math.random()*500)+1;
    const j = Math.floor(Math.random()*500)+1;


    b.style.left = i+"px";
    b.style.top = j+"px";

}
