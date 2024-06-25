let question = document.getElementById('question');
let answer_box = document.getElementById('answer');
let score = document.getElementById('score');
let incorrect= document.getElementById('incorrect');
answer_box.addEventListener('keypress', input_listener);
let selected_chapter = parseInt(sessionStorage.getItem("chapter"));

load_question();

function load_question() {    
    switch(selected_chapter){
        case 1:
            load_question_1();
            break;
        case 2:
            load_question_2();
            break;
        case 3:
            load_question_3();
            break;
        case 4:
            load_question_4();
            break;
        case 5:
            load_question_5();
            break;
        case 6:
            load_question_6();
            break;
        case 7:
            load_question_7();
            break;
        case 8:
            load_question_8();
            break;
        case 9:
            load_question_9();
            break;
        case 10:
            load_question_10();
            break;
        case 11:
            load_question_11();
            break;
        case 12:
            load_question_12();
            break;
    }

}

function go_main_page() {
    window.location.href="../index.html"
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
    let a = get_random(101, 9999);
    let b = get_random(101, 999);
    question.innerHTML = a + " + " + b;
    answer = a + b;
}

function load_question_2() {
    let a = get_random(1000, 9999);
    let b = get_random(101, 999);
    question.innerHTML = a + " - " + b;
 

}

function load_question_3() {
    let a = get_random(101, 999);
    let b = get_random(2, 9);
    question.innerHTML = a + " x " + b;
    answer = a * b;
}

function load_question_4() {
    let a = get_random(11,99);
    question.innerHTML = a + "²";
    answer = a * a;
}

function load_question_5() {
    let a = get_random(11, 99);
    let b = get_random(11, 99);
    question.innerHTML = a + " x " + b;
    answer = a * b;
}
 

function load_question_6() {
    let a = get_random(101, 999);
    question.innerHTML = a + "²";
    answer = a * a;
}

function load_question_7() {
    let a = get_random(11, 99);
    question.innerHTML = a + "³";
    answer = a * a * a;
}

//free real estate

function load_question_8() {
    let a = get_random(101, 999);
    question.innerHTML = a + "²";
    answer = a * a;

}

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








