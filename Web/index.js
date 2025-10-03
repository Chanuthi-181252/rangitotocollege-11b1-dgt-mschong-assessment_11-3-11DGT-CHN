function checkAllAnswered() {
    const quiz = document.querySelector('.quiz');
    const questions = quiz.querySelectorAll('.question');
    let allAnswered = true;

    questions.forEach(question => {
        const radios = question.querySelectorAll("input[type='radio']");
        const isAnswered = Array.from(radios).some(radio => radio.checked);
        if (!isAnswered) {
            allAnswered = false;
        }
    });

    const submitButton = document.getElementById("submitButton");
    const warningMessage = document.getElementById("warningMessage");

    submitButton.disabled = !allAnswered;
    warningMessage.style.display = allAnswered ? 'none' : 'block';
}

window.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('.quiz input[type="radio"]')
    radios.forEach(radio => {
        radio.addEventListener('change', checkAllAnswered);
    });

    checkAllAnswered();

    document.getElementById("redoButton").addEventListener("click", () => {
    const quiz = document.querySelector(".quiz");
    const radios = quiz.querySelectorAll("input[type='radio']");

    radios.forEach(radio => {
        radio.checked = false;
        radio.style.accentColor = '';
        });

    document.getElementById("submitButton").disabled = true;
    document.getElementById("warningMessage").style.display = "none";

    const result = document.getElementById("result");
    if (result) result.textContent = '';

    quiz.scrollIntoView({behavior: 'smooth'});

    checkAllAnswered();

    });

    document.getElementById('startQuizButton').addEventListener('click', () => {
        document.getElementById('quizContainer').style.display = 'block';
        document.getElementById('startQuizButton').style.display = 'none';
        document.getElementById('quizContainer').scrollIntoView({behavior: 'smooth'});
    });

});

function feedback() {
    //Question1
    if (document.getElementById('q1b').checked) {
        document.getElementById('q1b').style.accentColor = "green";
    }
    else {
        ['q1a', 'q1c', 'q1d'].forEach(id => {
            if (document.getElementById(id).checked){
                document.getElementById(id).style.accentColor = "red";
            }
        });
    }
    
    //Question2
    if (document.getElementById('q2b').checked) {
        document.getElementById('q2b').style.accentColor = "green";
    }
    else {
        ['q2a', 'q2c', 'q2d'].forEach(id => {
            if (document.getElementById(id).checked){
                document.getElementById(id).style.accentColor = "red";
            }
        });
    }

    //Question3 
    if (document.getElementById('q3b').checked) {
        document.getElementById('q3b').style.accentColor = "green";
    }
    else {
        ['q3a', 'q3c', 'q3d'].forEach(id => {
            if (document.getElementById(id).checked){
                document.getElementById(id).style.accentColor = "red";
            }
        });
    }

    //Question4 
    if (document.getElementById('q4c').checked) {
        document.getElementById('q4c').style.accentColor = "green";
    }
    else {
        ['q4a', 'q4b', 'q4d'].forEach(id => {
            if (document.getElementById(id).checked){
                document.getElementById(id).style.accentColor = "red";
            }
        });
    }

    //Question5 
    if (document.getElementById('q5d').checked) {
        document.getElementById('q5d').style.accentColor = "green";
    }
    else {
        ['q5a', 'q5b', 'q5c'].forEach(id => {
            if (document.getElementById(id).checked){
                document.getElementById(id).style.accentColor = "red";
            }
        });
    }

    //Question6 
    if (document.getElementById('q6c').checked) {
        document.getElementById('q6c').style.accentColor = "green";
    }
    else {
        ['q6a', 'q6b', 'q6d'].forEach(id => {
            if (document.getElementById(id).checked){
                document.getElementById(id).style.accentColor = "red";
            }
        });
    }

    //Question7
    if (document.getElementById('q7b').checked) {
        document.getElementById('q7b').style.accentColor = "green";
    }
    else {
        ['q7a', 'q7c', 'q7d'].forEach(id => {
            if (document.getElementById(id).checked){
                document.getElementById(id).style.accentColor = "red";
            }
        });
    }

    //Question8
    if (document.getElementById('q8c').checked) {
        document.getElementById('q8c').style.accentColor = "green";
    }
    else {
        ['q8a', 'q8b', 'q8d'].forEach(id => {
            if (document.getElementById(id).checked){
                document.getElementById(id).style.accentColor = "red";
            }
        });
    }

    //Question9
    if (document.getElementById('q9a').checked) {
        document.getElementById('q9a').style.accentColor = "green";
    }
    else {
        ['q9b', 'q9c', 'q9d'].forEach(id => {
            if (document.getElementById(id).checked){
                document.getElementById(id).style.accentColor = "red";
            }
        });
    }

    //Question10
    if (document.getElementById('q10d').checked) {
        document.getElementById('q10d').style.accentColor = "green";
    }
    else {
        ['q10a', 'q10b', 'q10c'].forEach(id => {
            if (document.getElementById(id).checked){
                document.getElementById(id).style.accentColor = "red";
            }
        });
    }
}

function getScoreForQ1() {
    var scoreQ1 = 0;
    if (document.getElementById('q1b').checked) {
        scoreQ1 = 1;
    }
    return scoreQ1;
}

function getScoreForQ2() {
    var scoreQ2 = 0;
    if (document.getElementById('q2b').checked) {
        scoreQ2 = 1;
    }
    return scoreQ2;
}

function getScoreForQ3() {
    var scoreQ3 = 0;
    if (document.getElementById('q3b').checked) {
        scoreQ3 = 1;
    }
    return scoreQ3;
}

function getScoreForQ4() {
    var scoreQ4 = 0;
    if (document.getElementById('q4c').checked) {
        scoreQ4 = 1;
    }
    return scoreQ4;
}

function getScoreForQ5() {
    var scoreQ5 = 0;
    if (document.getElementById('q5d').checked) {
        scoreQ5 = 1;
    }
    return scoreQ5;
}

function getScoreForQ6() {
    var scoreQ6 = 0;
    if (document.getElementById('q6c').checked) {
        scoreQ6 = 1;
    }
    return scoreQ6;
}

function getScoreForQ7() {
    var scoreQ7 = 0;
    if (document.getElementById('q7b').checked) {
        scoreQ7 = 1;
    }
    return scoreQ7;
}

function getScoreForQ8() {
    var scoreQ8 = 0;
    if (document.getElementById('q8c').checked) {
        scoreQ8 = 1;
    }
    return scoreQ8;
}

function getScoreForQ9() {
    var scoreQ9 = 0;
    if (document.getElementById('q9a').checked) {
        scoreQ9 = 1;
    }
    return scoreQ9;
}

function getScoreForQ10() {
    var scoreQ10 = 0;
    if (document.getElementById('q10d').checked) {
        scoreQ10 = 1;
    }
    return scoreQ10;
}

function calculateTotalScore() {
    var scoreQ1 = getScoreForQ1();
    var scoreQ2 = getScoreForQ2();
    var scoreQ3 = getScoreForQ3();
    var scoreQ4 = getScoreForQ4();
    var scoreQ5 = getScoreForQ5();
    var scoreQ6 = getScoreForQ6();
    var scoreQ7 = getScoreForQ7();
    var scoreQ8 = getScoreForQ8();
    var scoreQ9 = getScoreForQ9();
    var scoreQ10 = getScoreForQ10();

    var totalScore = scoreQ1 + scoreQ2 + scoreQ3 + scoreQ4 + scoreQ5 + scoreQ6 + scoreQ7 + scoreQ8 + scoreQ9 + scoreQ10;

    document.getElementById("result").textContent = "Your score: " + totalScore + "/10";

    feedback();
}


