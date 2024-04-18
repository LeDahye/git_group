import { Make_box } from "../calc.js"

function history() {

    const history_box = new Make_box("div", "history_box", "#container",);
    const delete_button = new Make_box("button", "delete_button", "#delete_button_container",);
    const delete_button_container = new Make_box("div", "delete_button_container", "#container")
    const delete_imgtag = new Make_box("img", "delete_img","#delete_button")

    delete_button_container.make()
    history_box.make()
    delete_button.make()
    delete_imgtag.make()
    document.querySelector("#delete_img").setAttribute("src","../jihoon/history/trash_can.svg")
    let history_storage = []

    for (let i = 0; i <= localStorage.length - 1; i++) {
        const history = window.localStorage.getItem(i)
        const El = new Make_box("button", `get_button${i}`, "#history_box", "btn_history")
        El.make()
        document.getElementById(`get_button${i}`).innerHTML = history
    }

    document.querySelector("#btn61").addEventListener("click", () => {
        let modify = document.querySelector("#display2").innerHTML
        let result = document.querySelector("#display1").innerHTML
        let history
        if (modify.includes("=") == 1) {
            history = document.querySelector("#test").innerHTML = modify + result
            history_storage.push(history)
            window.localStorage.setItem(localStorage.length, history_storage.slice(-1))

            const El = new Make_box("button", `get_button${localStorage.length - 1}`, "#history_box", "btn_history")
            El.make()
            document.getElementById(`get_button${localStorage.length - 1}`).innerHTML = history
            let count = window.localStorage.length
            let temp
            for (let i = 0; i <=count-1 ;i++){
                let button = document.getElementById(`get_button${i}`)    
                button.addEventListener("click", () => {
        
                    let text = button.innerHTML
                    temp=text.split("=",2)
                    document.getElementById("display2").innerHTML=temp[0]+"="
                    document.getElementById("display1").innerHTML =temp[1]
                })
                
        }
        }
    })

    document.querySelector("#delete_button").addEventListener("click", () => {
        localStorage.clear()
        document.getElementById("history_box").innerHTML = ""
    })

}




export { history }