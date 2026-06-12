function somar() {
  const num1 = Number(prompt("Digite o primeiro número:"));
  const num2 = Number(prompt("Digite o segundo número:"));
  const soma = num1 + num2;
  alert(`A soma dos números é ${soma}`);
}

function multiplicar() {
  const num1 = Number(prompt("Digite o primeiro número:"));
  const num2 = Number(prompt("Digite o segundo número:"));
  const multiplicacao = num1 * num2;
  alert(`A multiplicação dos números é ${multiplicacao}`);
}

function somarInputs() {
  const num1 = document.querySelector("#num1_soma").value;
  const num2 = document.querySelector("#num2_soma").value;
  console.log(num1, num2);
  const soma = Number(num1) + Number(num2);
  console.log(`A soma dos números é ${soma}`);
}
