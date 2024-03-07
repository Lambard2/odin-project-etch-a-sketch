let container = document.querySelector(".container")
let input = 16;
function generateField(input){
    container.replaceChildren()
    for(let i = 0; i < input*input; i++){
        container.appendChild(document.createElement("div"))
    }
    
    let sizing = document.querySelectorAll(".container div")
    for(let i = 0; i < sizing.length; i++){
        sizing[i].style.width = `${960/input}px`
        sizing[i].style.height = `${960/input}px`
    }
}


function handleButton(){
    input = prompt("Select size")
    if(input > 100){
        alert("Too many")
        return
    }
    generateField(input)
}