//fonction my_max() qui prend une array et qui retourne le nombre maximum

var x = my_max([2, 15, 2, 24, 3, 4, 45, 10]);
console.log(x)
function my_max(numbers) {
    return Math.max(...numbers);
}

// fonction vowel_count() qui prend un string et qui retourne le nombre de voyelles
var y = vowel_count("My name is alexandra");
console.log(y);
function vowel_count(string) {
    var letters = string.split(""); 
    var count = 0;
    for(var i= 0; i < letters.length; i++){
        if(letters[i] == "a" || letters[i] == "e" || letters[i] == "i" || letters[i] == "o" || letters[i] == "u" || letters[i] == "y"){
            count += 1;}
    }
    return count;
}

// fonction reverse() qui prend un string et qui renvoie les caractères en position inverse. 
var z = reverse("Bonjour Monde !")
console.log(z)
function reverse(string) {
    var split = string.split("");
    var reverse = split.reverse();
    var join = reverse.join("");
    return join
}