let Resultado = "";
let Estimativa = "";   

//let sexo = "Feminino";
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

console.log(`Você nasceu em ${nascimento} e você tem ${nascimento - anoAtual} anos.`);

function ColetaNome(){
    const nomeDeusuario = document.getElementById("inputNome").value;
    window.nomeDeusuario = nomeDeusuario;
    console.log("Seu nome é", nomeDeusuario);
}

function registrarNascimento() {
    // pega o que foi digitado
    const nascimento = document.getElementById("inputNascimento").value;

    // cria a variável com esse valor
    window.nascimento = nascimento;

    console.log("Nascimento digitado:", nascimento);
    console.log(`Você possui ${anoAtual - nascimento} anos.`);
  };
   function roda (){
    let newParagraph = document.createElement("p");
    let Resultado = `Seu nome é ${nomeDeusuario} ${Estimativa}`
    newParagraph.textContent = Resultado;
    document.body.appendChild(newParagraph);
   }


  function selecionarGenero() {
    // pega o valor do select
    const sexo = document.getElementById("generoSelect").value;
    // exemplo: guardar em uma variável global
    window.sexo = sexo;
     //Feminino
     registrarNascimento();
     ColetaNome();


if (sexo === "Feminino" && nascimento < 1940){
    let Estimativa = "48,3 anos Estimados de vida";
} else if (sexo === "Feminino" && nascimento >= 1940 && nascimento<1950){
    console.log("Estima-se 50,8 anos de vida");
} else if (sexo === "Feminino" && nascimento >= 1950 && nascimento<1960){
    console.log("Estima-se 55,5 anos de vida");
} else if (sexo === "Feminino" && nascimento >= 1960 && nascimento<1970){
    console.log("Estima-se 60,8 anos de vida");
} else if (sexo === "Feminino" && nascimento >= 1970 && nascimento<1980){
    console.log("Estima-se 65,7 anos de vida");
} else if (sexo === "Feminino" && nascimento >= 1980 && nascimento<1991){
    console.log("Estima-se 70,9 anos de vida");
} else if (sexo === "Feminino" && nascimento >= 1991 && nascimento<2000){
    console.log("Estima-se 75,1 anos de vida");
} else if (sexo === "Feminino" && nascimento >= 2000 && nascimento<2010){
    console.log("Estima-se 78,1	 anos de vida");
} else if (sexo === "Feminino" && nascimento >= 2010 && nascimento<2019){
    console.log("Estima-se 79,6	 anos de vida");
} else if (sexo === "Feminino" && nascimento >= 2019 && nascimento <2020){
    console.log("Estima-se 78,5	 anos de vida");
} else if (sexo === "Feminino" && nascimento >= 2020 && nascimento <2021){
    console.log("Estima-se 76,4 anos de vida");
} else if (sexo === "Feminino" && nascimento >= 2021 && nascimento <2022){
    console.log("Estima-se 78,8 anos de vida");
} else if (sexo === "Feminino" && nascimento >= 2022 && nascimento <2030){
    console.log("Estima-se 79,7 anos de vida");
}
else {  
    console.log("Não é mulher")
}



if (sexo === "Carioca") {
    console.log("Não irá passar dos 18 na rocinha")
} else {
    
}




 // Masculino
 // Masculino
if (sexo === "Masculino" && nascimento < 1940){
    console.log("42,9 anos Estimados de vida");
} else if (sexo === "Masculino" && nascimento >= 1940 && nascimento<1950){
    console.log("Estima-se 45,3 anos de vida");
} else if (sexo === "Masculino" && nascimento >= 1950 && nascimento<1960){
    console.log("Estima-se 49,7 anos de vida");
} else if (sexo === "Masculino" && nascimento >= 1960 && nascimento<1970){
    console.log("Estima-se 54,6 anos de vida");
} else if (sexo ==="Masculino" && nascimento >= 1970 && nascimento<1980){
    console.log("Estima-se 59,6 anos de vida");
} else if (sexo === "Masculino" && nascimento >= 1980 && nascimento<1991){
    console.log("Estima-se 63,2 anos de vida");
} else if (sexo === "Masculino" && nascimento >= 1991 && nascimento<2000){
    console.log("Estima-se 67,3 anos de vida");
} else if (sexo === "Masculino" && nascimento >= 2000 && nascimento<2010){
    console.log("Estima-se 70,7 anos de vida");
} else if (sexo === "Masculino" && nascimento >= 2010 && nascimento<2019){
    console.log("Estima-se 72,8 anos de vida");
} else if (sexo === "Masculino" && nascimento >= 2019 && nascimento <2020){
    console.log("Estima-se 71,2 anos de vida");
} else if (sexo === "Masculino" && nascimento >= 2020 && nascimento <2021){
    console.log("Estima-se 69,3 anos de vida");
} else if (sexo === "Masculino" && nascimento >= 2021 && nascimento <2022){
    console.log("Estima-se 72,1 anos de vida");
} else if (sexo === "Masculino" && nascimento >= 2022 && nascimento <2030){
    console.log("Estima-se 73,1 anos de vida");
}
else {
    console.log("Não é Homem")
}
roda();
  }
