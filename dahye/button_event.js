///////////////////////////* ↓↓↓ 숫자 click 이벤트 ↓↓↓ *///////////////////////////

import {equal_bt_click, equal_cal} from "../soohyung/postfix_calc.js";

function btn_num_click() {
    for (let i = 0; i < 10; i++) {
        document.getElementById(`btn${i}`).addEventListener('click',
            function () {
                // display1(결과값)에서 숫자 입력 시 display2로  숫자 초기화 입력
                if (display1.innerHTML !== '' && display2.innerHTML !== '') {
                    display2.innerHTML = `${i}`;
                    display1.innerHTML = '';
                } else {
                    display2.innerHTML += `${i}`;
                }
            });
    }
}

///////////////////////////* ↑↑↑ 숫자 click 이벤트 ↑↑↑ *///////////////////////////

// 연산자 조건
function all_operate(operate) {
    let text = display2.innerHTML;

    if (display1.innerHTML !== '' && display2.innerHTML !== '') {
        display2.innerHTML = display1.innerHTML;
        display1.innerHTML = '';
        display2.innerHTML += operate;
    } else if (!isNaN(text[text.length - 1]) || text[text.length - 1] === ')') {
        text += operate;
        display2.innerHTML = text;
    } else if (operate === "-") {
        if (text[text.length - 1] === '(') {
            text += operate;
            display2.innerHTML = text;
        } else {
        document.getElementById(`btn${operate.charCodeAt(0)}`).className = "btn op warning"
        setTimeout(() => {
        document.getElementById(`btn${operate.charCodeAt(0)}`).className="btn op"
        }, 1500);     
            
        }
    } else {
        document.getElementById(`btn${operate.charCodeAt(0)}`).className = "btn op warning"
        setTimeout(() => {
        document.getElementById(`btn${operate.charCodeAt(0)}`).className="btn op"
        }, 1500);     
        
    }
}

// 연산자(+, -, x, ÷) 클릭 이벤트 함수
function operator(btn_id, event, operate) {
    document.getElementById(btn_id).addEventListener(event, () => {
        all_operate(operate)
    });
}

// 점 버튼
function operator2() {
    document.getElementById("btn46").addEventListener("click", function () {
        let text = display2.innerHTML;

        if (display1.innerHTML !== '' && display2.innerHTML !== '') {
            display2.innerHTML = display1.innerHTML;
            display1.innerHTML = '';
            display2.innerHTML += '.';
        } else if (!isNaN(text[text.length - 1])) {
            text += ".";
            display2.innerHTML = text;
        } else {
            document.getElementById("btn46").className = "btn op warning"
            setTimeout(() => {
                document.getElementById("btn46").className="btn op"
            }, 1500);            
        }
    });

    // 괄호 열기 버튼
    document.getElementById("btn40").addEventListener("click", function () {
        let text = display2.innerHTML;

        if (display1.innerHTML !== '' && display2.innerHTML !== '') {
            display2.innerHTML = display1.innerHTML;
            display1.innerHTML = '';
        } else if (isNaN(text[text.length - 1])) {
            text += "(";
            display2.innerHTML = text;
        } else {
            document.getElementById("btn40").className = "btn op warning"
            setTimeout(() => {
                document.getElementById("btn40").className="btn op"
            }, 1500);                 
            
        }
    });

    // 괄호 닫기 버튼
    document.getElementById("btn41").addEventListener("click", function () {
        let text = display2.innerHTML;

        if (text.includes("(") === true) {
            text += ")";
            display2.innerHTML = text;
        } else {
            
            document.getElementById("btn41").className = "btn op warning"
            setTimeout(() => {
                document.getElementById("btn41").className="btn op"
            }, 1500);
        }
    });

    // delete 지우기 버튼
    document.getElementById("btn98").addEventListener("click", function () {
        let text = display2.innerHTML;
        text = text.slice(0, -1);
        display2.innerHTML = text;
    });

    // Clear 버튼
    document.getElementById("btn67").addEventListener("click", function () {
        display1.innerHTML = '';
        display2.innerHTML = '';
    });

    // equal 버튼 (결과값 도출)
    document.getElementById("btn61").addEventListener("click", function () {
        let text = display2.innerText;
        let text2 = equal_cal.sym_change(text)
        let text3 = equal_cal.add_plus(text2)
        let text_arr = equal_cal.convert_to_arr(text3);
        if (text_arr.length >= 3 && !text_arr.includes('=')) {
            if (text_arr.includes('+') || text_arr.includes('-') || text_arr.includes('*') || text_arr.includes('/')) {

                document.getElementById('display2').innerText += "="
                let result = document.getElementById('display2').innerText
                document.getElementById('display1').innerText = equal_bt_click(result)
            }
        }
    });
}


export {btn_num_click, operator, operator2};


// 키보드
// function btn_num_key() {
//     for (let i = 0; i < 10; i++) {
//         // Id = 지훈 인터페이스 숫자 값
//         document.getElementById(`btn${i}`).addEventListener("keydown",
//             function (i) {
//                 let text = display2.innerHTML;
//                 text += i.key;
//                 // Id = 선웅 디스플레이 값
//                 display2.innerHTML = text;
//             })
//     }
// }
// btn_num_key()

