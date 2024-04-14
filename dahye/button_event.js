let text = "";
function btn_num() {
    for (let i = 0; i < 10; i++) {
        // Id = 지훈 인터페이스 숫자 값
        document.getElementById(`btn${i}`).addEventListener("click",
            function () {
                text += i;
                // Id = 선웅 디스플레이 값
                document.getElementById("display").innerHTML = text;
            })
    }

}

// 덧셈 버튼
let operate_plus = document.getElementById("btn43").addEventListener("click",
    function () {
        text += "+";
        document.getElementById("display").innerHTML = text;
    })

// 뺄셈 버튼
let operate_minus = document.getElementById("btn45").addEventListener("click",
    function () {
        text += "-";
        document.getElementById("display").innerHTML = text;
    })

// 곱하기 버튼
let operate_multiple = document.getElementById("btn88").addEventListener("click",
    function () {
        text += "*";
        document.getElementById("display").innerHTML = text;
    })

// 나누기 버튼
let operate_divide = document.getElementById("btn47").addEventListener("click",
    function () {
        text += "/";
        document.getElementById("display").innerHTML = text;
    })

// 점 버튼
let operate_dot = document.getElementById("btn46").addEventListener("click",
    function () {
        text += ".";
        document.getElementById("display").innerHTML = text;
    })

// 지우기 버튼
let operate_delete = document.getElementById("btn98").addEventListener("click",
    function () {
        // text -= "";
        document.getElementById("display").innerHTML = text;
    })

// C 버튼
let operate_clear = document.getElementById("btn99").addEventListener("click",
    function () {
        text = "";
        document.getElementById("display").innerHTML = text;
    })


btn_num()