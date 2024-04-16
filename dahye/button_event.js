import { equal_cal, equal_bt_click } from '../soohyung/equal_button.js';

let text = [];

// 키보드
function btn_num_key() {
    for (let i = 0; i < 10; i++) {
        // Id = 지훈 인터페이스 숫자 값
        document.getElementById(`btn${i}`).addEventListener("keydown",
            function (event) {
                text += event.key;
                // Id = 선웅 디스플레이 값
                document.getElementById("display2").innerHTML = text;
            })
    }
}

// 마우스
function btn_num_click() {
    for (let i = 0; i < 10; i++) {
        // Id = 지훈 인터페이스 숫자 값
        document.getElementById(`btn${i}`).addEventListener("click",
            function (event) {
                text += i;
                // Id = 선웅 디스플레이 값
                document.getElementById("display2").innerHTML = text;
            })
    }
}

btn_num_key()
btn_num_click()

// 덧셈 버튼
function plusBt() {

    document.getElementById("btn43").addEventListener('click', function () {
        let d1 = display1.innerHTML;
        let d2 = display2.innerHTML;

        if (d1 !== '' && d2 !== '') {
            display2.innerHTML = display1.innerHTML;
            display1.innerHTML = '';
            display2.innerHTML += '+';
        } else {
            document.getElementById("btn43").addEventListener('click', function () {
                if (!isNaN(text[text.length - 1])) {
                    text += "+";
                    document.getElementById("display2").innerHTML = text;
                } else if (text.includes(")") === true || text.includes("(") === true) {
                    text += "+";
                    document.getElementById("display2").innerHTML = text;
                } else {
                    text += "";
                    document.getElementById("display2").innerHTML = text;
                }
            })
        }
    })
}
plusBt();
// let operate_plus = document.getElementById("btn43").addEventListener("click",
//     function () {
//         let d1 = display1.innerHTML;
//         let d2 = display2.innerHTML;

//         if (d1 !== '' && d2 !== '') {
//             let display1Text = display1.innerHTML;
//             display2.innerHTML = display1Text;
//             display1.innerHTML = '';
//         } else {
//             text += "+";
//             document.getElementById("display2").innerHTML = text;
//         }
//     })

// let operate_plus2 = document.getElementById("btn43").addEventListener("click",
//     function () {
//         // let d1 = display1.innerHTML;
//         // let d2 = display2.innerHTML;

//         // if (d1 !== '' && d2 !== '') {
//         //     let display1Text = display1.innerHTML;
//         //     display2.innerHTML = display1Text;
//         //     display1.innerHTML = '';
//         // } else {
//         //     text += "+";
//         //     document.getElementById("display2").innerHTML = text;
//         // }

//         if (!isNaN(text[text.length-1])) {
//             text += "+";
//             document.getElementById("display2").innerHTML = text;
//         } else if (text.includes(")") == true || text.includes("(") == true) {
//             text += "+";
//             document.getElementById("display2").innerHTML = text;

//         } else {
//             text += "";
//             document.getElementById("display2").innerHTML = text;

//         }
//     })

// 뺄셈 버튼
let operate_minus = document.getElementById("btn45").addEventListener("click",
    function () {
        if (!isNaN(text[text.length - 1])) {
            text += "-";
            document.getElementById("display2").innerHTML = text;
        }
    })

// 곱하기 버튼
let operate_multiple = document.getElementById("btn120").addEventListener("click",
    function () {
        if (!isNaN(text[text.length - 1])) {
            text += "x";
            document.getElementById("display2").innerHTML = text;
        }
    })

// 나누기 버튼
let operate_divide = document.getElementById("btn38").addEventListener("click",
    function () {
        if (!isNaN(text[text.length - 1])) {
            text += "&divide";
            document.getElementById("display2").innerHTML = text;
        }
    })

// 점 버튼
let operate_dot = document.getElementById("btn46").addEventListener("click",
    function () {
        if (!isNaN(text[text.length - 1])) {
            text += ".";
            document.getElementById("display2").innerHTML = text;
        }
    })

// 지우기 버튼
let operate_delete = document.getElementById("btn98").addEventListener("click",
    function () {
        text = text.slice(0, -1);
        document.getElementById("display2").innerHTML = text;
    })

// C 버튼
let operate_clear = document.getElementById("btn67").addEventListener("click",
    function () {
        text = "";
        document.getElementById("display2").innerHTML = text;
    })

// equal 버튼
let equal = document.getElementById("btn61").addEventListener("click",
    function () {
        if (!isNaN(text[text.length - 1])) {
            text += "=";
            document.getElementById("display2").innerHTML = text;
        } else if (text.includes(")") == true) {
            text += "=";
            document.getElementById("display2").innerHTML = text;
        }
        document.getElementById("display1").innerHTML = equal_bt_click(text);
    })



// const operate_arr = ["=", "-", "x", "&divide", "(", ")", ".", "b", "C", "+"]

// for (let x of operate_arr) {
//     document.getElementById(`btn${x.charCodeAt(0)}`).addEventListener("click",
//         () => {
//             text += x;
//             document.getElementById("display2").innerHTML = text;
//         })
// }