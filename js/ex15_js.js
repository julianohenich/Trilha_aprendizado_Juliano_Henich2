function enviar() {
    var nome=document.getElementById("nome")
    var email=document.getElementById("email")
    var ok
    if (nome.value!="" && nome.value.indexOf(" ")!=-1) {
        if(email.value.indexOf("@")!=-1){
            alert("Agradecemos o contato!")
            ok=true
        }
        else{
            alert("Digite seu email!")
            ok=false
        }
    }
    else{
        alert("Preencha seu nome completo!")
        ok=false
    }
    return ok
}