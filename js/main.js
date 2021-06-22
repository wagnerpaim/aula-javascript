function load() {
    alert("Página carregada");
}

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar no botão!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar no botão!");
}

function redirecionar() {
    window.open("https://ge.globo.com/");
    //window.location.href = "https://ge.globo.com/";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse!";
    //alert("Trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

//var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
//console.log(frutas);
//alert(frutas[1].nome);
//alert(frutas[1].cor);

/*
var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista[0]);
//alert(lista[1]);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));
//console.log(lista.join(" | "));

//var nome = "Wagner Lima";
//var idade = 31;
//var idade2 = 10;
//var frase = "Japão é a melhor seleção do mundo!";
//alert("Meu primeiro JS!");
//alert("Bem-vindo " + nome);
//alert(nome + " tem " + idade + " anos.")
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());