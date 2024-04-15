let text = [];

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

<<<<<<< HEAD
=======
// 초기값
let result = document.getElementById("display");
result.innerHTML = "0";

>>>>>>> 55115af2adfecd0fd4213927a8fa8213cd4383f0
// 덧셈 버튼
let operate_plus = document.getElementById("btn43").addEventListener("click",
    function () {
        if (!isNaN(text[text.length-1])) {
            text += "+";
            document.getElementById("display").innerHTML = text;
        }
    })

// 뺄셈 버튼
let operate_minus = document.getElementById("btn45").addEventListener("click",
    function () {
        if (!isNaN(text[text.length-1])) {
            text += "-";
            document.getElementById("display").innerHTML = text;
        }
    })

// 곱하기 버튼
let operate_multiple = document.getElementById("btn88").addEventListener("click",
    function () {
<<<<<<< HEAD
        text += "*";
        document.getElementById("display").innerHTML = text;
=======
        if (!isNaN(text[text.length-1])) {
            text += "x";
            document.getElementById("display").innerHTML = text;
        }
>>>>>>> 55115af2adfecd0fd4213927a8fa8213cd4383f0
    })

// 나누기 버튼
let operate_divide = document.getElementById("btn47").addEventListener("click",
    function () {
<<<<<<< HEAD
        text += "/";
        document.getElementById("display").innerHTML = text;
=======
        if (!isNaN(text[text.length-1])) {
            text += "&divide";
            document.getElementById("display").innerHTML = text;
        }
>>>>>>> 55115af2adfecd0fd4213927a8fa8213cd4383f0
    })

// 점 버튼
let operate_dot = document.getElementById("btn46").addEventListener("click",
    function () {
        if (!isNaN(text[text.length-1])) {
            text += ".";
            document.getElementById("display").innerHTML = text;
        }
    })

// 지우기 버튼
let operate_delete = document.getElementById("btn98").addEventListener("click",
    function () {
        text -= "";
        document.getElementById("display").innerHTML = text;
    })

// C 버튼
let operate_clear = document.getElementById("btn67").addEventListener("click",
    function () {
        text = [];
        document.getElementById("display").innerHTML = text;
    })

<<<<<<< HEAD

btn_num()
=======
// 괄호 열기 버튼
let operate_open = document.getElementById("btn40").addEventListener("click",
    function () {
        text += "(";
        document.getElementById("display").innerHTML = text;
    })

// 괄호 닫기 버튼
let operate_close = document.getElementById("btn41").addEventListener("click",
    function () {
        text += ")";
        document.getElementById("display").innerHTML = text;
    })

// equal 버튼
let equal = document.getElementById("btn61").addEventListener("click",
    function () {
        if (!isNaN(text[text.length-1])) {
        text += "=";
        document.getElementById("display").innerHTML = text;
    }
    })


btn_num()

let operate_arr = ["=", "-", "X", "/", "(", ")", ".", "b", "C", "+"];

// let operate = document.getElementById("display");
// operate_arr.forEach( function(arr) {

// })


for (x of operate_arr) {
    document.getElementById(`btn${x.charCodeAt(0)}`).addEventListener("click",
        () => {
            text += x;
            document.getElementById("display").innerHTML = text;
        })
}
>>>>>>> 55115af2adfecd0fd4213927a8fa8213cd4383f0
