var a = 10
var b = 20
var c = null // variável auxiliar utilizada na lógica

document.write('<h3>Valor de a: ' + a + '</h3>' +
               '<h3>Valor de b: ' + b + '</h3>' +
               '<h3>Valor de c: ' + c + '</h3>' +
               '<hr>'
              )

c = a
a = b
b = c
c = null

document.write('<h2>Após a inversão dos valores a e b,</h2>'  +
               '<h3>Valor de a: ' + a + '</h3>' +
               '<h3>Valor de b: ' + b + '</h3>' +
               '<h3>Valor de c: ' + c + '</h3>'
              )

