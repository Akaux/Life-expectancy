
let nascimento = 2009;
//let sexo = "Feminino";
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
 //Feminino
if (sexo === "Feminino" && nascimento < 1940){
    console.log("48,3 anos Estimados de vida");
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
    console.log("")
}








 // Masculino
if (sexo === "Masculino" && nascimento < 1940){
    console.log("48,3 anos Estimados de vida");
} else if (sexo === "Masculino" && nascimento >= 1940 && nascimento<1950){
    console.log("Estima-se 71,7 anos de vida");
} else if (sexo === "Masculino" && nascimento >= 1950 && nascimento<1960){
    console.log("Estima-se 72,6 anos de vida");
} else if (sexo === "Masculino" && nascimento >= 1960 && nascimento<1970){
    console.log("Estima-se");
} else if (sexo ==="Masculino" && nascimento >= 1970 && nascimento<1980){
    console.log("Estima-se");
} else if (sexo === "Masculino" && nascimento >= 1980 && nascimento<1991){
    console.log("Estima-se");
} else if (sexo === "Masculino" && nascimento >= 1991 && nascimento<2000){
    console.log("Estima-se");
} else if (sexo === "Masculino" && nascimento >= 2000 && nascimento<2010){
    console.log("Estima-se");
} else if (sexo === "Masculino" && nascimento >= 2010 && nascimento<2019){
    console.log("Estima-se 2");
} else if (sexo === "Masculino" && nascimento >= 2019 && nascimento <2020){
    console.log("Estima-se");
} else if (sexo === "Masculino" && nascimento >= 2020 && nascimento <2021){
    console.log("Estima-se");
} else if (sexo === "Masculino" && nascimento >= 2021 && nascimento <2022){
    console.log("Estima-se");
} else if (sexo === "Masculino" && nascimento >= 2022 && nascimento <2030){
    console.log("Estima-se");
}
else {
    console.log("")
}
console.log(`Você nasceu em ${nascimento} e você tem ${nascimento - anoAtual} anos.`);

function registrarNascimento() {
    // pega o que foi digitado
    const NascimentoDigitado = document.getElementById("inputNascimento").value;

    // cria a variável com esse valor
    window.nascimento = NascimentoDigitado;

    console.log("Nascimento digitado:", nascimento);
  }

  function selecionarGenero() {
    // pega o valor do select
    const sexo = document.getElementById("generoSelect").value;
    // exemplo: guardar em uma variável global
    window.sexo = sexo;
     //Feminino
     registrarNascimento();




if (sexo === "Feminino" && nascimento < 1940){
    console.log("48,3 anos Estimados de vida");
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
    console.log("")
}








 // Masculino
if (sexo === "Masculino" && nascimento < 1940){
    console.log("48,3 anos Estimados de vida");
} else if (sexo === "Masculino" && nascimento >= 1940 && nascimento<1950){
    console.log("Estima-se 71,7 anos de vida");
} else if (sexo === "Masculino" && nascimento >= 1950 && nascimento<1960){
    console.log("Estima-se 72,6 anos de vida");
} else if (sexo === "Masculino" && nascimento >= 1960 && nascimento<1970){
    console.log("Estima-se");
} else if (sexo ==="Masculino" && nascimento >= 1970 && nascimento<1980){
    console.log("Estima-se");
} else if (sexo === "Masculino" && nascimento >= 1980 && nascimento<1991){
    console.log("Estima-se");
} else if (sexo === "Masculino" && nascimento >= 1991 && nascimento<2000){
    console.log("Estima-se");
} else if (sexo === "Masculino" && nascimento >= 2000 && nascimento<2010){
    console.log("Estima-se");
} else if (sexo === "Masculino" && nascimento >= 2010 && nascimento<2019){
    console.log("Estima-se 2");
} else if (sexo === "Masculino" && nascimento >= 2019 && nascimento <2020){
    console.log("Estima-se");
} else if (sexo === "Masculino" && nascimento >= 2020 && nascimento <2021){
    console.log("Estima-se");
} else if (sexo === "Masculino" && nascimento >= 2021 && nascimento <2022){
    console.log("Estima-se");
} else if (sexo === "Masculino" && nascimento >= 2022 && nascimento <2030){
    console.log("Estima-se");
}
else {
    console.log("")
}
  }

