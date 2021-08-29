var nome = "Victor";
var idade = 29;
var idade2 = 10;
var frase = "Japão é um país"
/*
alert(nome + " tem " + idade + " anos")
*/
console.log(nome);
console.log(idade);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toLocaleUpperCase());
/*array*/
var lista = ["maça","pêra","laranja"];
console.log(lista);
console.log(lista[1]);
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" "));
/*dicionario*/
var frutas = [{nome: "maçã", cor: "vermelha"},{nome: "pêra", cor: "verde"}];
console.log(frutas);
console.log(frutas[1].nome);
/*condicionais*/
/*var idade = prompt("Qual sua idade");*/
var idade = 18;
if (idade >= 18){
    console.log("Maior de idade");
}else{
    console.log("Menor de idade");
};

/*laços de repetição*/
var count = 0;
while (count<5){
    console.log(count);
    count=count+1
};
var count;
for (count = 0; count <5; count++){
    console.log(count);
};
