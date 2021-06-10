let sum = document.getElementById("sum");
let gum = 5;
sum.textContent = gum ;
for (let i = 97; i < 123; i++) {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = String.fromCharCode(i);
    button.value = String.fromCharCode(i);

    const keyb = document.getElementsByClassName("keyb")[0];
    keyb.appendChild(button);

    const pat = document.getElementsByClassName("tar");

    for (let k = 0; k < pat.length; k++) {  
        button.addEventListener("click", function(event){
           if(event.target.textContent == pat[k].textContent){
              pat[k].classList.add("tarjs");
              event.target.style.backgroundColor = "blue";
              event.target.style.color = "white";
            }else if (event.target.textContent !== pat[k].textContent) {
                // gum -= 1;
                // sum.textContent = gum;
            }
            event.target.disabled = true;
        })
    }
} 

function myFunc() {
    location.reload()
}