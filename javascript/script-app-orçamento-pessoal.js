var menu = 0

function abrirMenu() {
    if (menu == 0) {
        document.getElementById('menuSuperior').style.height = 'auto'
        menu = 1
    } else {
        document.getElementById('menuSuperior').style.height = '67px'
        menu = 0
    }
}

class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = ('R$ ' + valor)
    }

    validarDados () {
        for (const atributo in this) {
            if (this[atributo] === null || this[atributo] === '' || this[atributo] === undefined || this[atributo] === 'R$ ') {
                return false
            }
        }

        return true
    }
}

class Bd {

    constructor() {
        let id = localStorage.getItem('id')

        if(id === null) {
            localStorage.setItem('id', 0)
        }
    }

    getProximoId() {
        let id = localStorage.getItem('id')
        id = parseInt(id)

        let proximoId = id + 1

        return proximoId
    }

    gravar(despesa) {
        let id = this.getProximoId()

        localStorage.setItem(id, JSON.stringify(despesa))

        localStorage.setItem('id', id)
    }
}

let bd = new Bd()

function cadastrarDespesa() {
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let despesa = new Despesa (
        ano.value,
        mes.value,
        dia.value,
        tipo.value, 
        descricao.value,
        valor.value
    )

    if (despesa.validarDados()) {
        //bd.gravar(despesa)
        console.log('correto');
    } else {
        console.log('falso');
    }
}
