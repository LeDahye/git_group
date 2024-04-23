class Make_box {
    constructor(type, id, parent, className) {
        this.type = type;
        this.id = id
        this.parent = parent
        this.className = className
    }
    make() {
        const El = document.createElement(this.type)
        El.id = this.id
        if (this.className !== undefined) {
            El.className = this.className
        }
        document.querySelector(this.parent).appendChild(El)
        return this.id
    }
}

const history1 = {
    
    modify: "display2",
    
    result: "display1",

    
    
    eq_btn_event: function () {
        document.querySelector("#btn61").addEventListener("click", () => {
            let modify = document.getElementById(this.modify).innerHTML
            let result = document.getElementById(this.result).innerHTML
            let count = window.localStorage.length
            if (modify.includes("=") == 1) {
                let temp_storage = modify + result
                this.push_local(temp_storage)
                
                //히스토리버튼 생성
                const history_button = new Make_box("button", `get_button${localStorage.length - 1}`, "#history_box", "btn_history")
                const history_btn_id = history_button.make()
                document.querySelector(`#${history_btn_id}`).innerHTML = temp_storage
                
                //히스토리버튼 기능 삽입
                let temp
                this.send_to_display(count, temp)
            }
        })
    },
    
    call_storage: function (parent, classname) {
        let count = window.localStorage.length
        let temp
        for (let i = 0; i <= localStorage.length - 1; i++) {
            const history = window.localStorage.getItem(i)
            const El = new Make_box("button", `get_button${i}`, `#${parent}`, classname)
            El.make()
            document.querySelector(`#get_button${i}`).innerHTML = history
            let button = document.querySelector(`#get_button${i}`)
            button.addEventListener("click", () => {
            let text = button.innerHTML
            temp = text.split("=", 2)
            document.getElementById(this.modify).innerHTML=temp[0]+"="
            document.getElementById(this.result).innerHTML =temp[1]
            })           

        }
    },
    //로컬에 데이터 전송
    push_local:function(temp_storage){
        let history_storage = []
        history_storage.push(temp_storage)
        window.localStorage.setItem(localStorage.length, history_storage.slice(-1)) 
    },
    
    send_to_display: function (count, temp) {
        for (let i = 0; i <= count; i++) {
            let button = document.querySelector(`#get_button${i}`)
            button.addEventListener("click", () => {
                let text = button.innerHTML
                temp = text.split("=", 2)
                document.getElementById(this.modify).innerHTML=temp[0]+"="
                document.getElementById(this.result).innerHTML =temp[1]
            })
        }        
    },
    
    deleter() {
        document.querySelector(`#delete_button`).addEventListener("click", () => {
        localStorage.clear()
        document.querySelector(`#history_box`).innerHTML = ""
        })        
    }
}

const historyUI = {
    
    del_svg: "../jihoon/trash_can.svg",
    
    make_delete_btn: function () {
        const delete_button_container = new Make_box("div", "delete_button_container", "#container")
        const delete_button = new Make_box("button", "delete_button", "#delete_button_container");
        const delete_imgtag = new Make_box("img", "delete_img", "#delete_button")     
        delete_button_container.make() 
        delete_button.make()
        delete_imgtag.make()
        document.querySelector("#delete_img").setAttribute("src", this.del_svg)
    },
    
    make_history_container: function () {
        const history_box = new Make_box("div", "history_box", "#container");
        history_box.make()
    },
}

function history_main() {
    
    historyUI.make_history_container()
    historyUI.make_delete_btn()
    history1.call_storage("history_box", "btn_history")
    history1.eq_btn_event()
    history1.deleter()
}
export{history_main}
