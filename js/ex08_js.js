var anosnas, prova
anosnas = prompt("Digite seu ano de nascimento: ")
prova = prompt("Você foi aprovado ou reprovado na prova prática de direção? Sim Não")
if(2022 - anosnas>18 && prova=="Sim"){
    alert("Você está apto para obter a CNH")
}
else{
    if(2022 - anosnas<18 && prova=="Não"){
        alert("Você não está apto para obter a CNH, pois não passou na prova e não tem idade suficiente")
    }
    else if(2022 - anosnas<18){
        alert("Você não está apto para obter a CNH, pois não tem idade suficiente")
    }
    else if(prova=="Não"){
        alert("Você não está apto para obter a CNH, pois não passou na prova")
    }
    
}