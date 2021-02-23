function escreverSenha() {
    document.getElementById('senha').style.backgroundColor = '#ffff99'
}

function validarSenha() {
    document.getElementById('senha').value = document.getElementById('senha').value.trim()
    if (document.getElementById('senha').value.length < 3) {
        document.getElementById('senha').style.backgroundColor = '#ff9999'
    } else {
        document.getElementById('senha').style.backgroundColor = '#99ff99'
    }
}