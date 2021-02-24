var valor1
var valor2
var operacao
var positionValor1
var positionValor2
var positionOperacao

function calcular(valor) {
    
    if (valor >= 0 && valor <= 9) {
        document.getElementById('campo').value += valor

    } else if (valor === '.') {
        document.getElementById('campo').value += valor

    } else if (valor === 'soma') {
        document.getElementById('campo').value += ' + '
        operacao = 'soma'
    }else if (valor === 'subtracao') {
        document.getElementById('campo').value += ' - '
        operacao = 'subtracao'

    }else if (valor === 'multiplicacao') {
        document.getElementById('campo').value += ' * '
        operacao = 'multiplicacao'

    }else if (valor === 'divisao') {
        document.getElementById('campo').value += ' / '
        operacao = 'divisao'

    } else if (valor === 'resultado') {
        switch (operacao) {
            case 'soma':
                positionOperacao = document.getElementById('campo').value.indexOf('+')
                break
            
            case 'subtracao':
                positionOperacao = document.getElementById('campo').value.indexOf('-')
                break

            case 'multiplicacao':
                positionOperacao = document.getElementById('campo').value.indexOf('*')
                break

            case 'divisao':
                positionOperacao = document.getElementById('campo').value.indexOf('/')
                break
        }
        
        positionValor1 = parseFloat(positionOperacao) - 1
        positionValor2 = parseFloat(positionOperacao) + 2
        
        valor1 = parseFloat(document.getElementById('campo').value.slice(0, positionValor1))
        valor2 = parseFloat(document.getElementById('campo').value.slice(positionValor2, document.getElementById('campo').value.lenght))
        
        positionoperacao = document.getElementById('campo').value += ' = '

        switch (operacao) {
            case 'soma':
                positionoperacao = document.getElementById('campo').value += (valor1 + valor2)
                break
            
            case 'subtracao':
                positionoperacao = document.getElementById('campo').value += (valor1 - valor2)
                break

            case 'multiplicacao':
                positionoperacao = document.getElementById('campo').value += (valor1 * valor2)
                break

            case 'divisao':
                positionoperacao = document.getElementById('campo').value += (valor1 / valor2)
                break
        }
    }
}

function reset() {
    valor1 = null
    valor2 = null
    operacao = null
    positionValor1 = null
    positionValor2 = null
    positionOperacao = null

    document.getElementById('campo').value = ''
}