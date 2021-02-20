function calcularSS(numero1, numero2, operacao) {
    switch (operacao) {
        case 'soma':
            soma = numero1 + numero2

            return soma

        case 'subtração':
            subtracao = numero1 - numero2

            return subtracao
    
        default:
            operacao = prompt('Digite de forma correta a operacao à ser executada entre "soma" e "subtração":')

            return calcularSS(numero1, numero2, operacao)
    }
}

var numero1 = prompt('Digite o primeiro número:')
numero1 = parseFloat(numero1)

var numero2 = prompt('Digite o segundo número:')
numero2 = parseFloat(numero2)

var operacao = prompt('Digite a operacao à ser executada entre "soma" e "subtração":')
operacao = operacao.toLowerCase().trim()

document.write('<h3>O resultado é: ' + calcularSS(numero1, numero2, operacao) + '</h3>')