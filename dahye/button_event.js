import { equal_bt_click } from '../soohyung/equal_button.js';

///////////////////////////* ↓↓↓ 숫자 click 이벤트 ↓↓↓ *///////////////////////////

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


//////////////////////////* ↓↓↓ 연산자 click 이벤트 ↓↓↓ *//////////////////////////
// 덧셈 버튼
function operator() {
    document.getElementById("btn43").addEventListener('click', function () {
        let display1 = document.getElementById("display1");
        let display2 = document.getElementById("display2");
        let text = display2.innerHTML;

        if (display1.innerHTML !== '' && display2.innerHTML !== '') {
            display2.innerHTML = display1.innerHTML;
            display1.innerHTML = '';
            display2.innerHTML += '+';
        } else {
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
        }
    });

    // 뺄셈, 음수 버튼
    document.getElementById("btn45").addEventListener("click", function () {
        let display1 = document.getElementById("display1");
        let display2 = document.getElementById("display2");
        let text = display2.innerHTML;

        if (display1.innerHTML !== '' && display2.innerHTML !== '') {
            display2.innerHTML = display1.innerHTML;
            display1.innerHTML = '';
            display2.innerHTML += '-';
        } if (text[text.length - 1] !== '-') {
            text += "-";
            document.getElementById("display2").innerHTML = text;
        }
    });

    // 곱하기 버튼
    document.getElementById("btn120").addEventListener("click", function () {
        let display1 = document.getElementById("display1");
        let display2 = document.getElementById("display2");
        let text = display2.innerHTML;

        if (display1.innerHTML !== '' && display2.innerHTML !== '') {
            display2.innerHTML = display1.innerHTML;
            display1.innerHTML = '';
            display2.innerHTML += 'x';
        } else {
            if (!isNaN(text[text.length - 1])) {
                text += "x";
                document.getElementById("display2").innerHTML = text;
            }
        }
    });

    // 나누기 버튼
    document.getElementById("btn38").addEventListener("click", function () {
        let display1 = document.getElementById("display1");
        let display2 = document.getElementById("display2");
        let text = display2.innerHTML;

        if (display1.innerHTML !== '' && display2.innerHTML !== '') {
            display2.innerHTML = display1.innerHTML;
            display1.innerHTML = '';
            display2.innerHTML += '÷';
        } else {
            if (!isNaN(text[text.length - 1])) {
                text += "&divide";
                document.getElementById("display2").innerHTML = text;
            }
        }
    });

    //////////////////////////* ↑↑↑ 연산자 click 이벤트 ↑↑↑ *//////////////////////////

    // 점 버튼
    document.getElementById("btn46").addEventListener("click", function () {
        let display1 = document.getElementById("display1");
        let display2 = document.getElementById("display2");
        let text = display2.innerHTML;

        if (display1.innerHTML !== '' && display2.innerHTML !== '') {
            display2.innerHTML = display1.innerHTML;
            display1.innerHTML = '';
            display2.innerHTML += '.';
        } else {
            if (!isNaN(text[text.length - 1])) {
                text += ".";
                document.getElementById("display2").innerHTML = text;
            }
        }
    });

    // 괄호 열기 버튼
    document.getElementById("btn40").addEventListener("click", function () {
        let text = document.getElementById("display2").innerHTML;
        text += "(";
        document.getElementById("display2").innerHTML = text;
    });

    // 괄호 닫기 버튼
    document.getElementById("btn41").addEventListener("click", function () {
        let text = document.getElementById("display2").innerHTML;
        if (text.includes("(") == true) {
            text += ")";
            document.getElementById("display2").innerHTML = text;
        }
    });

    // delete 지우기 버튼
    document.getElementById("btn98").addEventListener("click", function () {
        let text = document.getElementById("display2").innerHTML;
        text = text.slice(0, -1);
        document.getElementById("display2").innerHTML = text;
    });

    // Clear 버튼
    document.getElementById("btn67").addEventListener("click", function () {
        let display1 = document.getElementById("display1");
        let display2 = document.getElementById("display2");

        display1.innerHTML = '';
        display2.innerHTML = '';
    });

    // equal 버튼 (결과값 도출)
    document.getElementById("btn61").addEventListener("click", function () {
        let text = document.getElementById("display2").innerHTML;
        if (!isNaN(text[text.length - 1])) {
            text += "=";
            document.getElementById("display2").innerHTML = text;
        } else if (text.includes(")") == true) {
            text += "=";
            document.getElementById("display2").innerHTML = text;
        }
    });
}

export { btn_num_click, operator };



// 키보드
// function btn_num_key() {
//     for (let i = 0; i < 10; i++) {
//         // Id = 지훈 인터페이스 숫자 값
//         document.getElementById(`btn${i}`).addEventListener("keydown",
//             function (i) {
//                 let text = document.getElementById("display2").innerHTML;
//                 text += i.key;
//                 // Id = 선웅 디스플레이 값
//                 document.getElementById("display2").innerHTML = text;
//             })
//     }
// }
// btn_num_key()