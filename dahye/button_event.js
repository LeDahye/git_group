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

// const oper_plus = new Operator("btn43", "click", "+");
// oper_plus.listener("btn43", "click", "+")

// class Operator {
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
    }
}

// all_operate(operate, `${!isNaN(text[text.length - 1]) || text[text.length - 1] ===')'}`)

function operator(btn_id, event, operate) {
    // 연산자(+, -, x, ÷) 클릭 이벤트
    document.getElementById(btn_id).addEventListener(event, () => { all_operate(operate) });

    // 점 버튼
    document.getElementById("btn46").addEventListener("click", function () {
        let text = display2.innerHTML;

        if (display1.innerHTML !== '' && display2.innerHTML !== '') {
            display2.innerHTML = display1.innerHTML;
            display1.innerHTML = '';
            display2.innerHTML += '.';
        } else if (!isNaN(text[text.length - 1])) {
            text += ".";
            display2.innerHTML = text;
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
        }
    });

    // 괄호 닫기 버튼
    document.getElementById("btn41").addEventListener("click", function () {
        let text = display2.innerHTML;

        if (text.includes("(") === true) {
            text += ")";
            display2.innerHTML = text;
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
        let text = display2.innerHTML;
        if (!isNaN(text[text.length - 1])) {
            text += "=";
            display2.innerHTML = text;
        }
    });
}

export { btn_num_click, operator };