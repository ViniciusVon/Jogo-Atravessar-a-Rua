//Codigo do carro 

//listas de carros
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 263, 318];
let velocidadeCarros = [2, 2.5, 3, 5, 3.3, 2.7];
let comprimentoCarro = 50;
let alturaCarro = 40;


//Funcoes para facilitar no Draw
function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++ /* i = i + 1 */){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++ /* i = i + 1 */){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++ /* i = i + 1 */){
    if(passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }  
}

function passouTodaATela(xCarros){
  return xCarros < -50;
}