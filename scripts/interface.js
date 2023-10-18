window.onload = ()=>{
    let squares = document.querySelectorAll(".square")
    squares.forEach((square)=>{
        square.addEventListener('click',handleClick)
    })

}

function handleClick () {
    elemento = this.id
    inserir(elemento)

    gameUpdate()
}

function gameUpdate(){
    let square = document.getElementById(elemento)
    square.innerHTML = `<div class="${board[elemento]}"></div>`
}
