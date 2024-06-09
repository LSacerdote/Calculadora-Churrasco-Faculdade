let quant = 0;
let quant2 = 0;
let quant3 = 0;

function process(val) {
    quant += val;
    quant = Math.max(0, quant);
    document.getElementById('quant').value = quant;
}

function process2(val) {
    quant2 += val;
    quant2 = Math.max(0, quant2); 
    document.getElementById('quant2').value = quant2;
}

function process3(val) {
    quant3 += val;
    quant3 = Math.max(0, quant3); 
    document.getElementById('quant3').value = quant3;
}

function calcularChurrasco() {
    let homens = quant;
    let mulheres = quant2;
    let criancas = quant3;

    let consumoHomem = { carne: 0.5, frango: 0.2, linguica: 0.2, refrigerante: 0.3, cerveja: 0.8 };
    let consumoMulher = { carne: 0.3, frango: 0.2, linguica: 0.2, refrigerante: 0.4, cerveja: 0.5 };
    let consumoCrianca = { carne: 0.2, frango: 0.1, linguica: 0.2, refrigerante: 0.2, cerveja: 0 };

    let total = {
        carne: homens * consumoHomem.carne + mulheres * consumoMulher.carne + criancas * consumoCrianca.carne,
        frango: homens * consumoHomem.frango + mulheres * consumoMulher.frango + criancas * consumoCrianca.frango,
        linguica: homens * consumoHomem.linguica + mulheres * consumoMulher.linguica + criancas * consumoCrianca.linguica,
        refrigerante: homens * consumoHomem.refrigerante + mulheres * consumoMulher.refrigerante + criancas * consumoCrianca.refrigerante,
        cerveja: homens * consumoHomem.cerveja + mulheres * consumoMulher.cerveja
    };

    return total;
}
document.getElementById("calcular").addEventListener("click", function() {
  let resultadosDiv = document.getElementById("resultados");

  
  resultadosDiv.innerHTML = '<div class="loader"></div>';

  setTimeout(function() {
      let total = calcularChurrasco();

      resultadosDiv.innerHTML = "<p>Carne bovina: " + total.carne.toFixed(1) + " Kg</p>"
          + "<p>Frango: " + total.frango.toFixed(1) + " Kg</p>"
          + "<p>Linguiça: " + total.linguica.toFixed(1) + " Kg</p>"
          + "<p>Refrigerante: " + total.refrigerante.toFixed(1) + " L</p>"
          + "<p>Cerveja: " + total.cerveja.toFixed(1) + " L</p>";
  }, 1200); 
});
document.getElementById("limpar").addEventListener("click", function() {
    quant = 0;
    quant2 = 0;
    quant3 = 0;
    document.getElementById('quant').value = quant;
    document.getElementById('quant2').value = quant2;
    document.getElementById('quant3').value = quant3;
    document.getElementById("resultados").innerHTML = "";
});