var vida = 3

// Definindo a dimensão do palco
var altura
var largura

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    //console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

// Criando posições randomicas
function poicaoRandomica() {

    // remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        // controlando os pontos de vida
        if (vida != 0) {
            document.getElementById('v' + vida).src = '../../imagens/coracao_vazio.png'
            vida --
        } else {
            window.location.href = 'game-mata-mosquito-loser.html'
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    // Criar o elemento html
    var mosquito = document.createElement('img')

    mosquito.className = tamanhoRandomico() + ' ' + ladooRandomico()

    mosquito.src = '../../imagens/mosca.png'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'

    mosquito.id = 'mosquito'

    mosquito.onclick = function name() {
        this.remove()
    }

    document.body.appendChild(mosquito)
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

// cronometro
var tempo = 60

var cronometro = setInterval(function name(params) {
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)

        window.location.href = 'game-mata-mosquito-winner.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
        tempo -=1
    }
}, 1000);

// definindo a dificuldade
var criaMosquitoTempo

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    criaMosquitoTempo = 1500
}else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000
} else if (nivel === 'chuck') {
    criaMosquitoTempo = 750
}

