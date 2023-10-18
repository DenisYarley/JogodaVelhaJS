let board = ["","","","","","","","",""];
let playerTime = 0;
let symbols = ["o","x"];

function inserir(elemento){
    

    if(board[elemento] == ""){
        board[elemento] = symbols[playerTime]
        playerTime = playerTime == 0 ? 1 : 0
    }

    ganhou()

}

ganhou = ()=>{
    velha = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i in velha){
        let num1 = velha[i][0]
        let num2 = velha[i][1]
        let num3 = velha[i][2]
        
        if(board[num1] == board[num2] &&
        board[num1] == board[num3] && board[num1] != ""){
            setTimeout(()=>{
                alert("Ganhou")
                window.location.reload()
            },100)
            
        }
    }
}