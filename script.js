let currentResult = ""; // Variável que armazena a expressão atual da calculadora

function appendNumber(number) {
  currentResult += number; // Concatena o número digitado à expressão atual
  displayResult(); // Atualiza o resultado exibido na tela
}

function appendOperator(operator) {
  currentResult += operator; // Concatena o operador digitado à expressão atual
  displayResult(); // Atualiza o resultado exibido na tela
}

function clearResult() {
  currentResult = ""; // Limpa a expressão atual
  displayResult(); // Atualiza o resultado exibido na tela
}

function calculateResult() {
  try {
    const result = eval(currentResult); // Avalia a expressão atual e obtém o resultado
    currentResult = result.toString(); // Converte o resultado para uma string e armazena na expressão atual
    displayResult(); // Atualiza o resultado exibido na tela
  } catch (error) {
    currentResult = ""; // Limpa a expressão atual em caso de erro
    displayResult(); // Atualiza o resultado exibido na tela
    alert("Erro na expressão!"); // Exibe um alerta informando sobre o erro na expressão
  }
}

function displayResult() {
  document.getElementById("result").value = currentResult; // Atualiza o valor do elemento HTML com o resultado atual
}
