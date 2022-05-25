var v=[4, 8 ,7, 6]
//alert(v)
v[1]=9
//alert(v[1])
//alert(v)
lista=["Zequinha",1994,"Rua abc","Irati","PR",12.3]
//alert(lista)
for (var i=0; i < lista.length; i++) {
    document.write("<h2>"+lista[i]+"</h2>")
    
}
lista.push("84500-000") //adiciona item na ultima posição
lista.push("DER") 
alert(lista)

lista.pop();//remover o ultimo elemento da lista

lista.shift()//remover o primeiro elemento da lista
lista.unshift("Juliano") //adiciona item na primeira posição
alert(lista)

alert(lista.indexOf("Irati")) //procura algo dentro da lista e indica sua posição
