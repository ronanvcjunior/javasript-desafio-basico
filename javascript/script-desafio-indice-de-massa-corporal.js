var nome = prompt('Digite o seu nome:')
var altura = prompt('Digite a sua altura em (cm):')
var massa = prompt('Digite a sua massa corporal (kg):')


altura = parseFloat(altura)
massa = parseFloat(massa)

alturaEmMetros = altura / 100
IndiceDeMassaCorporal = massa / (alturaEmMetros * alturaEmMetros)

var classificacao = null

if (IndiceDeMassaCorporal < 16) {
    classificacao = 'Baixo peso muito grave'

} else if (IndiceDeMassaCorporal >= 16 && IndiceDeMassaCorporal < 17) {
    classificacao = 'Baixo peso grave'
    
} else if (IndiceDeMassaCorporal >= 17 && IndiceDeMassaCorporal < 18.5) {
    classificacao = 'Baixo peso'
    
} else if (IndiceDeMassaCorporal >= 18.5 && IndiceDeMassaCorporal < 25) {
    classificacao = 'Peso normal'
    
} else if (IndiceDeMassaCorporal >= 25 && IndiceDeMassaCorporal < 30) {
    classificacao = 'Sobrepeso'
    
} else if (IndiceDeMassaCorporal >= 30 && IndiceDeMassaCorporal < 35) {
    classificacao = 'Obesidade grau I'
    
} else if (IndiceDeMassaCorporal >= 35 && IndiceDeMassaCorporal < 40) {
    classificacao = 'Obesidade grau III'
    
} else {
    classificacao = 'Baixo peso muito grave'

}

document.write('<h3>'+ nome +' possui índice de massa corporal igual a ' + IndiceDeMassaCorporal +', sendo classificado como: ' + classificacao + '</h3>')
