import { equal_cal, equal_bt_click } from '../soohyung/equal_button.js';

// let text = [];

// 키보드
// function btn_num_key() {
//     for (let i = 0; i < 10; i++) {
//         // Id = 지훈 인터페이스 숫자 값
//         document.getElementById(`btn${i}`).addEventListener("keydown",
//             function (event) {
//                 text += event.key;
//                 // Id = 선웅 디스플레이 값
//                 document.getElementById("display2").innerHTML = text;
//             })
//     }
// }

// 마우스
// function btn_num_click() {
//     for (let i = 0; i < 10; i++) {
//         // Id = 지훈 인터페이스 숫자 값
//         document.getElementById(`btn${i}`).addEventListener("click",
//             function (event) {
//                 text += i;
//                 // Id = 선웅 디스플레이 값
//                 document.getElementById("display2").innerHTML = text;
//             })
//     }
// }

// btn_num_key()
// btn_num_click()


// // 덧셈 버튼
// let operate_plus = document.getElementById("btn43").addEventListener("click",
// function () {
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

//     // 뺄셈 버튼
//     let operate_minus = document.getElementById("btn45").addEventListener("click",
//     function () {
//         if (!isNaN(text[text.length-1])) {
//             text += "-";
//             document.getElementById("display2").innerHTML = text;
//         }
//     })

//     // 곱하기 버튼
//     let operate_multiple = document.getElementById("btn88").addEventListener("click",
//     function () {
//         if (!isNaN(text[text.length-1])) {
//             text += "x";
//             document.getElementById("display2").innerHTML = text;
//         }
//     })

//     // 나누기 버튼
//     let operate_divide = document.getElementById("btn47").addEventListener("click",
//     function () {
//         if (!isNaN(text[text.length-1])) {
//             text += "&divide";
//             document.getElementById("display2").innerHTML = text;
//         }
//     })

//     // 점 버튼
//     let operate_dot = document.getElementById("btn46").addEventListener("click",
//     function () {
//         if (!isNaN(text[text.length-1])) {
//             text += ".";
//             document.getElementById("display2").innerHTML = text;
//         }
//     })

//     // 지우기 버튼
//     let operate_delete = document.getElementById("btn98").addEventListener("click",
//     function () {
//         text = text.slice(0, -1);
//         document.getElementById("display2").innerHTML = text;
//     })

//     // C 버튼
//     let operate_clear = document.getElementById("btn67").addEventListener("click",
//     function () {
//         text = [];
//         document.getElementById("display2").innerHTML = text;
//     })

//     // 괄호 열기 버튼
//     let operate_open = document.getElementById("btn40").addEventListener("click",
//     function () {
//         text += "(";
//         document.getElementById("display2").innerHTML = text;
//     })

//     // 괄호 닫기 버튼
//     let operate_close = document.getElementById("btn41").addEventListener("click",
//     function () {
//         if (text.includes("(") ==true) {
//             text += ")";
//             document.getElementById("display2").innerHTML = text;
//         }
//     })

//     // equal 버튼
//     let equal = document.getElementById("btn61").addEventListener("click",
//     function () {
//         if (!isNaN(text[text.length-1])) {
//             text += "=";
//             document.getElementById("display2").innerHTML = text;
//         }  else if (text.includes(")") == true) {
//             text += "=";
//             document.getElementById("display2").innerHTML = text;
//         }
//         document.getElementById("display1").innerHTML = equal_bt_click(text);
//     })



btn_num_key()
// btn_num_click()

function btn_num_key() {
    for (let i = 0; i < 10; i++) {
        // Id = 지훈 인터페이스 숫자 값
        document.getElementById(`btn${i}`).addEventListener("keydown",
            function (event) {
                text = text + event.key;
                // Id = 선웅 디스플레이 값
                document.getElementById("display2").innerHTML = text;
            })
    }
}


let text = [];
class Click_btn {
    btn_num_click(btn_id, btn_event, display, let_name) {
        btn_id = btn_id;
        btn_event = btn_event;
        display = display;
        let_name = let_name;
        for (let i = 0; i < 10; i++) {
            document.getElementById(btn_id + i).addEventListener(btn_event,
                function (event) {
                    text = text + let_name;
                    document.getElementById(display).innerHTML = text;
                })
        }
    }
}

const btn_click = new Click_btn();

btn_click.btn_num_click("btn", "click", "display2", i);

// const operate_arr = ["=", "-", "x", "&divide", "(", ")", ".", "b", "C", "+"]

// for (let x of operate_arr) {
//     document.getElementById(`btn${x.charCodeAt(0)}`).addEventListener("click",
//         () => {
//             text += x;
//             document.getElementById("display2").innerHTML = text;
//         })
// }