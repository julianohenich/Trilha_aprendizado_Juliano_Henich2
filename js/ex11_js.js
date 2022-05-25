var num, cont, result
num = parseInt(prompt("Digite um valor "))
for (cont = 0; cont < 11; cont++) {
    result=cont * num
    document.write("<h2>"+result+"</h2>")
}