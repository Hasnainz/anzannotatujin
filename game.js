let question = document.getElementById('question');
let answer_box = document.getElementById('answer');
let score = document.getElementById('score');
let incorrect = document.getElementById('incorrect');
answer_box.addEventListener('keypress', input_listener);
let selected_chapter = parseInt(sessionStorage.getItem("chapter"));

let digit_slider = document.getElementById('digits');
let size_slider = document.getElementById('size');

let size = 1;
let digits = 1;

digit_slider.oninput = function() {
    digits = this.value;
    load_question();
}
size_slider.oninput = function() {
    size = this.value;
    load_question();
}


load_question();

function load_question() {    
    eval(`load_question_${selected_chapter}()`);
}

function go_main_page() {
    window.location.href="/anzannotatujin"
}


function get_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function input_listener(e) {
  if (e.keyCode === 13) {
    check_answer();
  }  
  return false;
}

function check_answer() {
    if(!answer) {
        return;
    }
    if(answer === parseInt(answer_box.value)) {
        answer_box.value = "";
        score.innerHTML = parseInt(score.innerHTML) + 1;
    }
    else {
        answer_box.value = "";
        incorrect.innerHTML = parseInt(incorrect.innerHTML) + 1;
        return;
    }
    load_question();


}

function load_question_1() {
    digit_slider.remove();
    size_slider.remove();

    let a = get_random(101, 9999);
    let b = get_random(101, 999);
    question.innerHTML = a + " + " + b;
    answer = a + b;
}

function load_question_2() {
    digit_slider.remove();
    size_slider.remove();


    let a = get_random(1000, 9999);
    let b = get_random(101, 999);
    question.innerHTML = a + " - " + b;
    answer = a - b;
}

function load_question_3() {
    digit_slider.remove();
    size_slider.remove();


    let a = get_random(101, 999);
    let b = get_random(2, 9);
    question.innerHTML = a + " x " + b;
    answer = a * b;
}

function load_question_4() {
    digit_slider.remove();
    size_slider.remove();


    let a = get_random(11,99);
    question.innerHTML = a + "²";
    answer = a * a;
}

function load_question_5() {
    digit_slider.remove();
    size_slider.remove();


    let a = get_random(11, 99);
    let b = get_random(11, 99);
    question.innerHTML = a + " x " + b;
    answer = a * b;
}
 

function load_question_6() {
    digit_slider.remove();
    size_slider.remove();


    let a = get_random(101, 999);
    question.innerHTML = a + "²";
    answer = a * a;
}

function load_question_7() {
    digit_slider.remove();
    size_slider.remove();


    let a = get_random(11, 99);
    question.innerHTML = a + "³";
    answer = a * a * a;
}

//
//  d|n
//  1|1 - 9
//  2|10 - 99
//  3|100 - 999
//  4|1000 - 9999
//

function load_question_8() {
    let lower = Math.pow(10, digits - 1);
    let upper = Math.pow(10, digits) - 1;
    sums = [];
    for(let i = 0; i < size; i++) {
        sums.push(get_random(lower, upper));
    }
    let string = "";
    sums.forEach(num => {
        string += num.toString() + "+";
    });
    question.innerHTML = string.substring(0, string.length - 1);
    answer = sums.reduce((a, b) => a + b);
}

//free real estate

function load_question_9() {
    let a = get_random(11, 99);
    question.innerHTML = a + "³";
    answer = a * a * a;
}

function load_question_10() {
    let a = get_random(1000, 9999);
    let b = get_random(101, 999);
    question.innerHTML = a + " - " + b;
    answer = a - b;
}

function load_question_11() {
    let a = get_random(101, 999);
    let b = get_random(2, 9);
    question.innerHTML = a + " x " + b;
    answer = a * b;
}

function load_question_12() {
    let a = get_random(11,99);
    question.innerHTML = a + "²";
    answer = a * a;
}








