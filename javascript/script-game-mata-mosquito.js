var vida = 3
var tempo = 60
var altura
var largura
var criaMosquitoTempo
var resultado
var nivel = window.location.search.replace('?', '')

// Definindo a dimensão do palco
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    //console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

/* ############################################################################################## */

// Jogo
function iniciarJogo() {

    removeMosquito()

    var posicaoX = posicaoRandomica(largura)
    var posicaoY =posicaoRandomica(altura)

    //console.log(posicaoX, posicaoY)

    // Criar o elemento html
    var mosquito = document.createElement('img')

    mosquito.className = tamanhoRandomico() + ' ' + ladooRandomico()

    mosquito.src = '../../imagens/mosca.png'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'

    mosquito.id = 'mosquito'

    mosquito.onmousedown = function name() {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

// Criando posições randomicas
function posicaoRandomica(tamanhoEixoTela) {
    var posicao = Math.floor(Math.random() * tamanhoEixoTela) - 90

    while (posicao <= 0) {
        posicao = Math.floor(Math.random() * tamanhoEixoTela) - 90
    }
    return posicao
}

// Criando tamanhos randomicas
function tamanhoRandomico() {
    var classe = Math.floor(Math.random() * 3)
    //console.log(classe)
    return 'mosquito' + classe
}

// Criando lados randomicas
function ladooRandomico() {
    var classe = Math.floor(Math.random() * 2)
    //console.log(classe)
    return 'lado' + classe
}

// remover o mosquito anterior (caso exista)
function removeMosquito() {
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        // controlando os pontos de vida
        if (vida != 0) {
            document.getElementById('v' + vida).src = '../../imagens/coracao_vazio.png'
            vida --
        } else {
            resultado = 'game_over'
            resultadoJogo(resultado)
        }
    }
}

// resultado do jogo
function resultadoJogo(resultado) {
    window.location.href = 'game-mata-mosquito-resultado.html?'+ resultado
}

// cronometro
var cronometro = setInterval(function name() {
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)

        resultado = 'vitoria'
        resultadoJogo(resultado)
    } else {
        document.getElementById('cronometro').innerHTML = tempo
        tempo -=1
    }
}, 1000);

// definindo a dificuldade
if (nivel === 'normal') {
    criaMosquitoTempo = 1500
}else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000
} else if (nivel === 'chuck') {
    criaMosquitoTempo = 750
}

// cria o mosquito
var criaMosquito = setInterval(function() {
    iniciarJogo()
}, criaMosquitoTempo);

