const celulas = document.querySelectorAll(".celula");
let ChecarTurno = true;
const JOGADOR_X = "X";
const JOGADOR_O = "O";
const combinacoes = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

document.addEventListener("click", (event) =>{
    if(event.target.matches(".celula")){
        jogar(event.target.id)
    }
});

function jogar(id) {
    const celula = document.getElementById(id);
    turno = ChecarTurno ? JOGADOR_X : JOGADOR_O;
    celula.textContent = turno;
    celula.classList.add(turno)    
    ChecaVencedor(turno)
}

function ChecaVencedor(turno){
    const vencedor = combinacoes.some((comb)=> {
        return comb.every((index) => {
            return celulas[index].classList.contains(turno)
        })
    })
 if (vencedor){
     encerraJogo(turno)
 }else if (checarEmpate()){
    encerraJogo()
 }else{
    ChecarTurno = !ChecarTurno;
 }


}

function checarEmpate(){
    let X = 0;
    let O = 0;
    for (index in celulas){
        if (!isNaN(index)){

            if (celulas[index].classList.contains(JOGADOR_X)){
                X++
            }

            if (celulas[index].classList.contains(JOGADOR_O)){
                O++
            }   
        }
        
    }

    return X + O === 9 ? true : false;    
}

function encerraJogo(vencedor = null){
    const telaescura = document.getElementById("tela-escura")
    const h2 = document.createElement("h2")
    const h3 = document.createElement("h3")
    let mensagem = null

    telaescura.style.display = "block"
    telaescura .appendChild(h2)
    telaescura .appendChild(h3)


    if (vencedor){
        h2.innerHTML = 'o player '+ vencedor +' venceu';
    }else{
        h2.innerHTML = "empatou"
    }
}