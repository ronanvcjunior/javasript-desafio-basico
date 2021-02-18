var idade = prompt('Digite a sua idade:')

if (idade >= 0 && idade < 15) {
    document.write('Você é uma criança')
} else if (idade >= 15 && idade < 30) {
    document.write('Você é um jovem')
} else if (idade >= 30 && idade < 60) {
    document.write('Você é um adulto')
} else if (idade >= 60 &&  idade <= 122) {
    document.write('Você é um idoso')
} else if (idade > 122) {
    document.write('Parabéns!!! você acaba de entrar no guinness book com o título de pessoa mais velha da história')
} else {
    document.write('Algo de errado não está certo! Você não nasceu ainda. Você é do futuro?')
}