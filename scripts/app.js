function resetearJuego(){
    casillas.forEach(element => {
        element.innerHTML = '';
        turno = "X";
        ganador = false;
        mensaje.innerHTML = 'Es el turno del jugador ' + turno + '.';
    });
}

function chequearGanador(player){
    
    // verificar filas
    if(casillas[0].innerHTML === player && casillas[1].innerHTML === player && casillas[2].innerHTML === player){
        return true;
    }
    if(casillas[3].innerHTML === player && casillas[4].innerHTML === player && casillas[5].innerHTML === player){
        return true;
    }
    if(casillas[6].innerHTML === player && casillas[7].innerHTML === player && casillas[8].innerHTML === player){
        return true;
    }

    // verificar columnas
    if(casillas[0].innerHTML === player && casillas[3].innerHTML === player && casillas[6].innerHTML === player){
        return true;
    }
    if(casillas[1].innerHTML === player && casillas[4].innerHTML === player && casillas[7].innerHTML === player){
        return true;
    }
    if(casillas[2].innerHTML === player && casillas[5].innerHTML === player && casillas[8].innerHTML === player){
        return true;
    }

    // verificar diagonales
    if(casillas[0].innerHTML === player && casillas[4].innerHTML === player && casillas[8].innerHTML === player){
        return true;
    }
    if(casillas[2].innerHTML === player && casillas[4].innerHTML === player && casillas[6].innerHTML === player){
        return true;
    }

    return false;
}

const casillas = document.querySelectorAll('#casilla');
const mensaje = document.querySelector('#mensaje');
const btn = document.querySelector('#btn');
let turno = "X";
let ganador = false;


casillas.forEach(casillero => {
    casillero.addEventListener("click", ()=>{
        if (!ganador && casillero.innerHTML === '') {
            casillero.innerHTML = turno;

            // Verificar si el jugador actual gano
            if(chequearGanador(turno)){
                ganador = true;          
            }
            // Verificar si hay empate

            // Cambio de turno
            if(!ganador){
                turno = turno === 'X' ? 'O' : 'X';
                mensaje.innerHTML = `Es el turno del jugador ${turno}.`;
            }
        }
        if (ganador){
            mensaje.innerHTML = `El jugador ${turno} ha ganado!`; 
        }
    });    
});    

btn.addEventListener('click', ()=>{
    resetearJuego();
});

