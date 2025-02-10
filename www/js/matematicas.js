let num1, num2, operator, correctAnswer;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    let operators = ['+', '-', '*', '/'];
    operator = operators[Math.floor(Math.random() * operators.length)];

    switch (operator) {
        case '+': correctAnswer = num1 + num2; break;
        case '-': correctAnswer = num1 - num2; break;
        case '*': correctAnswer = num1 * num2; break;
        case '/': correctAnswer = parseFloat((num1 / num2).toFixed(2)); break;
    }

    document.getElementById("question").textContent = `¿Cuánto es ${num1} ${operator} ${num2}?`;
    document.getElementById("result").textContent = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    let userAnswer = parseFloat(document.getElementById("answer").value);
    if (userAnswer === correctAnswer) {
        document.getElementById("result").textContent = "¡Correcto! 🎉";
    } else {
        document.getElementById("result").textContent = "Incorrecto. Inténtalo de nuevo.";
    }
    setTimeout(generateQuestion, 2000);
}

generateQuestion();