//Imagens do Jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//sons do Jogo
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("Imagem/estrada.png");
  imagemDoAtor = loadImage("Imagem/ator-1.png");
  imagemCarro = loadImage("Imagem/carro-1.png");
  imagemCarro2 = loadImage("Imagem/carro-2.png");
  imagemCarro3 = loadImage("Imagem/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
  
  somDaTrilha = loadSound("Sons/trilha.mp3");
  somDaColisao = loadSound("Sons/colidiu.mp3");
  somDoPonto = loadSound("Sons/pontos.wav");
}
