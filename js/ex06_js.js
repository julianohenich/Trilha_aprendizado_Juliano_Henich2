var n1, n2, res
n1 = prompt("Digite o primeiro valor")
n2 = prompt("Digite o segundo valor")
if(n1<n2){
    alert("Não foi possivel fazer a subtração")
}
else{
    res = parseInt(n1) - parseInt(n2)
    alert(res)
}