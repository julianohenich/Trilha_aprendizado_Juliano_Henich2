// função sem retorno
function somar(n1, n2) {
    var r
    r=n1+n2
    alert("Função soma sem retorno. Resultado "+r)
}
//função com retorno
function subtrair(a, b) {
    var r
    r=a-b
    return(r)
}


somar(10, 35)

var resultado
resultado = subtrair(35, 10)
alert("Função subtrair com retorno. Resultado "+resultado)