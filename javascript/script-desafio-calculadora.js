function calcular(valor) {
    if (document.getElementById('campo').value.indexOf('=') !== -1) {
        if ((valor >= 0 && valor <= 9) || (valor === '.')) {
            reset()
        } else {
            var posicao = document.getElementById('campo').value.indexOf('=') + 2
            document.getElementById('campo').value = document.getElementById('campo').value.slice(posicao)
        }
    }
    
    if (valor >= 0 && valor <= 9) {
        document.getElementById('campo').value += valor

    } else if (valor === '.') {
        document.getElementById('campo').value += valor

    } else if (valor === 'soma') {
        document.getElementById('campo').value += ' + '
    }else if (valor === 'subtracao') {
        document.getElementById('campo').value += ' - '

    }else if (valor === 'multiplicacao') {
        document.getElementById('campo').value += ' * '

    }else if (valor === 'divisao') {
        document.getElementById('campo').value += ' / '

    } else if (valor === 'resultado') {
        var resultado = eval(document.getElementById('campo').value)
        document.getElementById('campo').value += ' = ' + resultado
    }
}

function reset() {
    document.getElementById('campo').value = ''
}

var str = '12 + 2 = 2'
var index = str.indexOf('=')
console.log(index);
var slice = str.slice(index+2)
console.log(slice);