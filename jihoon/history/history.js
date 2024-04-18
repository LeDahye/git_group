import { Make_box } from "../calc.js"

function history() {

const history_box = new Make_box("div", "history_box", "#container","");
const delete_button = new Make_box("button", "delete_button", "body","");

history_box.make()
delete_button.make()
document.querySelector("#delete_button").innerHTML = "Delete"
let history_storage = []
    
    for (let i = 1; i <= localStorage.length; i++) {
        const history = window.localStorage.getItem(i)
        const El = new Make_box("button", `get_button${i}`, "#history_box", "btn_history")
        El.make()
        document.getElementById(`get_button${i}`).innerHTML = history
    }
    
    document.querySelector("#btn61").addEventListener("click", () =>{
        let modify = document.querySelector("#display2").innerHTML
        let result = document.querySelector("#display1").innerHTML
        let history
        if (modify.includes("=") == 1) {            
            history = document.querySelector("#test").innerHTML = modify + result
            history_storage.push(history)
            window.localStorage.setItem(localStorage.length, history_storage.slice(-1))
            
            const El = new Make_box("button", `get_button${localStorage.length-1}`, "#history_box", "btn_history")
            El.make()
            document.getElementById(`get_button${localStorage.length-1}`).innerHTML = history
            }
        })
            
        document.querySelector("#delete_button").addEventListener("click", () => {
            localStorage.clear()
            document.getElementById("history_box").innerHTML=""
        })
}




export {history}

































// const history = {

//     // modify: text,

//     // result: equal,

//     connected_modify: text + equal_bt_click(text),

//     local_push: function (connected_modify, calc_storage) {
//         calc_storage.push(connected_modify)

//         for (x of calc_storage) {
//             window.localStorage.setItem(calc_storage.indexOf(x), x)
//         }
//     },
//     local_get: function () {
//         const El_c = document.createElement("div")
//         El_c.id = "history_container"
//         document.body.appendChild(El_c)
//         for (let i = 0; i < localStorage.length; i++) {
//             let call = window.localStorage.getItem(i)
//             create_button(i, call)
//         }

//         function create_button(id_set, text) {

//             const El = document.createElement("button");
//             const Text = document.createTextNode(text)
//             El.appendChild(Text)
//             El.id = `btn${id_set}`
//             let Div = document.getElementById("history_container")
//             Div.appendChild(El)
//             document.body.appendChild(Div)
//         }
//     },
//     button_utill: function () {
//         for (let i = 0; i < localStorage.length; i++) {
//             const El = document.querySelector(`#btn${i}`)
//             El.addEventListener("click", function () {
//                 const local_deta = window.localStorage.getItem(i);
//                 const local_data = local_deta.split("=")
//                 local_data[0] = local_data[0] + "="
//                 send = local_data
//             })
//         }
//     },
//     delete_button: function () {
//         const El = document.createElement("button")
//         const text = document.createTextNode("DELETE")
//         El.appendChild(text)
//         El.id = "history_delete"
//         document.body.appendChild(El)
//         const delete_button = document.getElementById("history_delete")
//         delete_button.addEventListener("click", () => {
//             window.localStorage.clear()
//             document.querySelector("#history_container").innerHTML = ""
//         })
//     }
// }

// function history_main(connected_modify) {
//     // let calc_storage = ["1+2=4", "2+5=7"]
//     // connected_modify = "3-2=1"
//     history.connected_modify
//     history.local_push(connected_modify, calc_storage)
//     history.local_get()
//     history.button_utill()
//     history.delete_button()


// }

// history_main()