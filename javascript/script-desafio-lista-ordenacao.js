var objetos = Array('Cadeira', 'Impressora', 'Garfo')

function adicionarElemento() {
    var elemento = document.getElementById('campoTexto').value.trim()

    if (elemento == '') {
        alert('Informe um valor válido')
    } else {
        var verificacao = objetos.indexOf(elemento)
        if (verificacao != -1) {
            alert("Objeto já foi adicionado")
        } else {
            objetos.push(elemento)
        }
    }
    console.log(objetos);

    clear()
}

function OrdenarArray() {
    console.log(objetos.sort().sort(ordenarObjetos));
}

function ordenarObjetos(a, b) {
    if ((a == 0 || a != 0) && (b == 0 || b != 0)) {
    return a - b
        
    } else {
        return
    }
}

function clear() {
    document.getElementById('campoTexto').value = ''
}