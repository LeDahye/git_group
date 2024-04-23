import {ui} from '../sonwong/display.js'
import {btn_num_click, operator, operator2} from '../dahye/button_event.js';


import {history_main} from '../jihoon/history.js';
import {equal_bt_click, equal_cal} from "../soohyung/postfix_calc.js";

ui()    // display 연결
btn_num_click()   // 연산식 호출
operator("btn43", "click", "+");    // 덧셈 버튼
operator("btn45", "click", "-");    // 뺄셈, 음수 버튼
operator("btn120", "click", "x");   // 곱하기 버튼

operator("btn247", "click", "÷");    // 나누기 버튼
operator2();

document.getElementById("btn61").addEventListener("click", function () {
    let modify = document.getElementById("display2").innerHTML
    let result = equal_bt_click(modify);
    document.getElementById("display1").innerHTML = result
})






// history()
history_main()






