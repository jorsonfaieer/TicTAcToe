function resetearJuego(){
    casillas.forEach(element => {
        element.innerHTML = '';
    });
}


const casillas = document.querySelectorAll('#casilla');
const mensaje = document.querySelector('#mensaje');
const btn = document.querySelector('#btn');
let turno = "X";
let ganador = false;


casillas.forEach(element => {
    element.addEventListener("click", ()=>{
        if (!ganador && element.innerHTML === '') {
            element.innerHTML = turno;

            // Verificar si el jugador actual gano

            // Verificar si hay empate

            // Cambio de turno
            turno = turno === 'X' ? 'O' : 'X';
            mensaje.innerHTML = 'Es el turno del jugador ' + turno + '.';
        }        
    });    
});    

btn.addEventListener('click', ()=>{
    resetearJuego();
});

