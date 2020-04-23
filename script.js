function calc() {
    var peso = parseFloat(document.getElementsByName("peso")[0].value);
    var altura = parseFloat(document.getElementsByName("altura")[0].value);
    var calc_imc = peso / (altura * altura)
    document.getElementsByName("imc")[0].value = calc_imc.toFixed(1)
    if (calc_imc < 16) {
        alert("Você está muito abaixo do peso!")
    }
    else if (calc_imc >= 16 && calc_imc <= 19) {
        alert("Você está abaixo do peso!")
    }
    else if (calc_imc > 19 && calc_imc <= 25) {
        alert("Você está com o peso ideal!")
    }
    else if (calc_imc > 25 && calc_imc <= 30) {
        alert("Você está acima do peso!")
    }
    else if (calc_imc > 30 && calc_imc <= 35) {
        alert("Você está muito acima do peso!")
    }
    else if (calc_imc > 35) {
        alert("Você está com obesidade mórbida!")
    }
}

function calcE() {
    var weight = parseFloat(document.getElementsByName("weight")[0].value);
    var feet = parseFloat(document.getElementsByName("feet")[0].value);
    var inches = parseFloat(document.getElementsByName("inches")[0].value);
    var cal_in = feet * 12 + inches
    var calc_bmi = 703 * weight / (cal_in * cal_in)
    document.getElementsByName("bmi")[0].value = calc_bmi.toFixed(1)

    if (calc_imc < 18) {
        alert("You are underweight!")
    }
    else if (calc_imc >= 18 && calc_imc <= 24.9) {
        alert("You are healthy!")
    }
    else if (calc_imc >= 25 && calc_imc <= 29.9) {
        alert("You are overweight!")
    }
    else if (calc_imc >= 30 && calc_imc <= 39.9) {
        alert("You are obese!")
    }
    else if (calc_imc > 40) {
        alert("You are extremely obese!!")
    }
}