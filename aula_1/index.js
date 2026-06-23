//botao somar
function somar() {
  const num1 = Number(prompt("Digite o primeiro número:"));
  const num2 = Number(prompt("Digite o segundo número:"));
  const soma = num1 + num2;
  alert(`A soma dos números é ${soma}`);
}

//botao multiplicar
function multiplicar() {
  const num1 = Number(prompt("Digite o primeiro número:"));
  const num2 = Number(prompt("Digite o segundo número:"));
  const multiplicacao = num1 * num2;
  alert(`A multiplicação dos números é ${multiplicacao}`);
}

//botao dividir
function dividir() {
  const num1 = Number(prompt("Digite o primeiro número:"));
  const num2 = Number(prompt("Digite o segundo número:"));
  if (num2 == 0) {
    alert(`O segundo numero nao pode ser menor que 1`);
  } else {
    const divisao = num1 / num2;
    alert(`A divisao dos números é ${divisao}`);
  }
}

//somar inputs
function somarInputs() {
  const num1 = Number(document.querySelector("#num1_soma").value);
  const num2 = Number(document.querySelector("#num2_soma").value);
  const resultado = document.querySelector("#resultado_soma");
  const soma = num1 + num2;
  resultado.textContent = `O resultado da soma eh ${soma}`;
}
