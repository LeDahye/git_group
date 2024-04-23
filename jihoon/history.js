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
const history_box = new Make_box("div", "history_box", "#container");
const delete_button_container = new Make_box("div", "delete_button_container", "#container")
const delete_button = new Make_box("button", "delete_button", "#delete_button_container");
const delete_imgtag = new Make_box("img", "delete_img", "#delete_button")


// "="버튼 클릭이벤트
function eq_event() {

    document.querySelector("#btn61").addEventListener("click", () => {
        let modify = document.querySelector("#display2").innerHTML
        let result = document.querySelector("#display1").innerHTML
        let count = window.localStorage.length
        if (modify.includes("=") == 1) {
            let temp_storage = modify + result
            push_local(temp_storage)

            //히스토리버튼 생성
            const history_button = new Make_box("button", `get_button${localStorage.length - 1}`, "#history_box", "btn_history")
            const history_btn_id = history_button.make()
            document.querySelector(`#${history_btn_id}`).innerHTML = temp_storage

            //히스토리버튼 기능 삽입
            let temp
            call_history(count, temp)
        }
    })
}
//로컬에 데이터 가져오기
function call_storage(parent, classname) {
    for (let i = 0; i <= localStorage.length - 1; i++) {
        const history = window.localStorage.getItem(i)
        const El = new Make_box("button", `get_button${i}`, `#${parent}`, classname)
        El.make()
        document.querySelector(`#get_button${i}`).innerHTML = history
    }


}
//딜리트버튼 삭제기능 삽입
function deleter(btn_id, box_id) {
    document.querySelector(`#${btn_id}`).addEventListener("click", () => {
        localStorage.clear()
        document.querySelector(`#${box_id}`).innerHTML = ""
    })
}
//로컬에 데이터 전송
function push_local(temp_storage) {

    let history_storage = []

    history_storage.push(temp_storage)
    window.localStorage.setItem(localStorage.length, history_storage.slice(-1))
}
//
function call_history(count, temp) {
    for (let i = 0; i <= count; i++) {
        let button = document.querySelector(`#get_button${i}`)
        button.addEventListener("click", () => {
            let text = button.innerHTML
            temp = text.split("=", 2)
            document.querySelector("#display2").innerHTML = temp[0] + "="
            document.querySelector("#display1").innerHTML = temp[1]
        }
        )
    }

}


function history() {

    // 히스토리UI 생성
    const history_id = history_box.make();

    // Delete버튼Ul 관련 요소 생성
    const delete_btn_con_id = delete_button_container.make();
    const delete_btn_id = delete_button.make();
    const delete_imgtag_id = delete_imgtag.make();

    call_storage(history_id, "btn_hitory")
    eq_event()
    //딜리트버튼 기능 삽입
    deleter(delete_btn_id, history_id)
    //히스토리버튼 기능 삽입
    document.querySelector("#delete_img").setAttribute("src", "../jihoon/trash_can.svg")
    let temp
    call_history(window.localStorage.length, temp)
}
export { history }