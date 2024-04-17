import ui from '../jihoon/calc.js'
import make_dis from '../sonwong/display.js'
import { btn_num_click, operator } from '../dahye/button_event.js';
import { equal_bt_click } from '../soohyung/equal_button.js';

ui()
make_dis()
btn_num_click()
operator()
document.getElementById("btn61").addEventListener("click", function () {
    let display2 = document.getElementById("display2").innerHTML
    let result = equal_bt_click(display2);
    document.getElementById("display1").innerHTML = result
})
