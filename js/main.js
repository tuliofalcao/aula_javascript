function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar aqui!"
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse."
}

function voltar(elemento){
    elemento.innerHTML = 'Passe o mouse aqui';
}

function load(){
    alert("Página carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1,n2){
    return n1 + n2;
}
*/

//var d = new Date
//alert(d.getMinutes())


/*
var idade = prompt("Qual a sua idade?")
if (idade >= 18){
    alert("Maior de idade!")
}else{
    alert("Menor de idade!")
}
*/

/*
var nome = "Túlio Falcão"
var idade = 45
var idade2 = 10
var frase = "Japão é o melhor time do mundo"
//alert(nome + ", " + idade + " anos.")
//alert(idade + idade2)
console.log(nome)
console.log(idade+idade2)
console.log(frase.replace("Japão", "Brasil"))
alert(frase.replace("Japão", "Canadá"))
*/

/*
var lista = ["maçã", "pêra", "laranja"]

lista.push("uva")
console.log(lista[3])
lista.pop()
console.log(lista[3])
*/