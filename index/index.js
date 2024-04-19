import { ui } from '../sonwong/calc.js'
import { btn_num_click, operator, operator2 } from '../dahye/button_event.js';
import { equal_bt_click } from '../soohyung/equal_button.js';
import { history } from '../jihoon/history.js';

ui()

btn_num_click()
operator("btn43", "click", "+");    // 덧셈 버튼
operator("btn45", "click", "-");    // 뺄셈, 음수 버튼
operator("btn120", "click", "x");   // 곱하기 버튼
operator("btn38", "click", "÷");    // 나누기 버튼
operator2();

document.getElementById("btn61").addEventListener("click", function () {
    let modify = document.getElementById("display2").innerHTML
    let result = equal_bt_click(modify);
    document.getElementById("display1").innerHTML = result
})






history()


