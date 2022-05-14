var num1, num2, res
num1 = parseInt(prompt("Digite o primeiro valor"))
num2 = parseInt(prompt("Digite o segundo valor"))
conta = (prompt("Digite o tipo e conta: 1 + 2 - 3 * 4 /"))

if(conta == 1){
    res = num1 + num2
    alert("A soma é " + res)
}
else if(conta == 2){
    res = num1 - num2
    alert("A subtração é " + res)
}
else if(conta == 3){
    res = num1 * num2
    alert("A multiplicação é " + res)
}
else if(conta == 4){
    res = num1 / num2
    alert("A divisão é " + res)
}