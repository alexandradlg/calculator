// faire une fonction add(), qui prend deux nombres et qui les ajoute entre eux - edit = prend un array puis fait un each dessus
function add(calc) {
    var num = calc.split('+');
    var result = 0
    for (var i = 0; i < num.length; i++) {
        result += parseInt(num[i]);
      }
    return result;
}
// faire une fonction multiply(), qui prend deux nombres pour les multiplier entre eux - edit = prend un array puis fait un each dessus
function multiply(calc) {
    var num = calc.split('*');
    var result = 1
    for (var i = 0; i < num.length; i++) {
        result = result * parseInt(num[i]);
      }
    return result;
}
// faire une fonction divide(), qui prend deux nombres pour les diviser entre eux - edit = prend un array puis fait un each dessus
function divide(calc) {
    var num = calc.split('/');
    var result = num[0]
    for (var i = 1; i < num.length; i++) {
        result = result / parseInt(num[i]);
      }
    return result;
}
// faire une fonction substract(), qui prend deux nombres pour les soustraire entre eux - edit = prend un array puis fait un each dessus
function substract(calc) {
    var num = calc.split('-');
    var result = num[0]
    for (var i = 1; i < num.length; i++) {
        result -= parseInt(num[i]);
      }
    return result;
}

// ------------------------------------------ CALCULATRICE VERSION 1 ----------------------------------------------
// version sans eval(string)

var calculation = Array();
function get_calculation(calc_numbers) {
    if (calc_numbers != '=') {
        calculation.push(calc_numbers);
        document.getElementById("calc_result").value = calculation.join('');
    } else if (calc_numbers == '=') {
        var calc = calculation.toString().replace(/,/g,"");
        if (calc.includes('+')) {
            document.getElementById("calc_result").value = add(calc);
        } else if (calc.includes('*')) {
            document.getElementById("calc_result").value = multiply(calc);
        } else if (calc.includes('/')) {
            document.getElementById("calc_result").value = divide(calc);
        } else if (calc.includes('-')) {
            document.getElementById("calc_result").value = substract(calc);
        }
    }
}

// ------------------------------------------ CALCULATRICE VERSION 2 ----------------------------------------------
// version avec eval(string)
// pour tester, mettre la version 1 en commentaire et dé commenter les lignes qui suivent : 

// var calculation = Array();
// function get_calculation(calc_numbers) {
//     if (calc_numbers != '=') {
//         calculation.push(calc_numbers);
//         document.getElementById("calc_result").value = calculation.join('');
//     } else if (calc_numbers == '=') {
//         var calc = calculation.toString().replace(/,/g,"");
//         document.getElementById("calc_result").value = eval(calc)
//     }
// }


    