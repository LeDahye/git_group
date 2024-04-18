import ui from '../jihoon/calc.js'
import {btn_num_click, operator} from '../dahye/button_event.js';
import {equal_bt_click} from '../soohyung/equal_button.js';
import make_display from '../sonwong/display.js';


ui()
make_display()
btn_num_click()
operator()


document.getElementById("btn61").addEventListener("click", function () {
    let modify = document.getElementById("display2").innerHTML
    document.getElementById("display1").innerHTML = equal_bt_click(modify)
})


