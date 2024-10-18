const num_out = document.getElementById("NUM");
const user_nums = document.getElementById("USER");
const answer = document.getElementById("ANSWER");
const bad_input = document.getElementById("ERROR");
const num_entered = document.getElementById("INPUT");
let user_input = 0;
let num = 0;
let temp = 0;
const num_list = [];
const user_list = [];
let i = 2;
let message = "";

function Reset() {
    answer.style.display = "none";
    bad_input.style.display = "none";

    num = Math.floor(Math.random() * 280) + 20;
    temp = num;
    num_list.length = 0;
    user_list.length = 0;
    i = 2;

    while (i <= temp) {
        if (temp % i == 0) {
            num_list.push(i);
            temp = temp / i;
        } else {
            i++;
        }
    }

    num_out.innerHTML = num.toString();
    user_nums.innerHTML = user_list.toString();
}

function Get_Input() {
    user_input = num_entered.value;
    user_input = Number(user_input);
    if (!(isNaN(user_input))) {
        user_input = Math.floor(user_input);
        user_list.push(user_input);
        bad_input.style.display = "none";
    } else {
        bad_input.style.display = "flex";
    }
    
    user_nums.innerHTML = user_list.toString();
}

function Delete() {
    if (user_list.length > 0) {
        user_list.pop();
        user_nums.innerHTML = user_list.toString();
    }
}

function Check_Answer() {
    user_list.sort(function(a, b){return a - b});
    if (Arrays_Equal(user_list, num_list)) {
        message = "Correct!";
        answer.style.color = "green";
    } else {
        message = "Sorry the correct answer was: " + num_list.toString();
        answer.style.color = "orange";
    }
    answer.innerHTML = message;
    answer.style.display = "flex";
}

function Arrays_Equal(a, b) {
    if (a.length == b.length) {
        for (let j = 0; j < a.length; j++){
            if (a[j] != b[j]) return false;
        }
        return true;
    }
    return false;
}