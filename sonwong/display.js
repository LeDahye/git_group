//Div박스 생성 클래스
class MakeBox {
    constructor(type, id, parent, className) {
        this.type = type;
        this.id = id
        this.parent = parent
        this.className = className
    }

    make_box() {
        const El = document.createElement(this.type)
        El.id = this.id
        if (this.className !== undefined) {
            El.className = this.className
        }
        document.querySelector(this.parent).appendChild(El)
    }
}

//숫자 패드 생성 클래스
class MakeNumButton {
    constructor(type, className, parent) {
        this.type = type;
        this.className = className
        this.parent = parent;

    }

    make_button() {
        for (let i = 0; i < 10; i++) {
            const El = document.createElement(this.type)
            const text = document.createTextNode(i)
            El.appendChild(text)
            El.id = `btn${i}`
            El.className = this.className
            document.getElementById(this.parent).appendChild(El)
        }
    }
}

//연산자 패드 생성 클래스

class MakeOperatorButton extends MakeNumButton {
    constructor(type, className, parent) {
        super(type, className, parent)

    }

    make_operator() {
        const operator = ["=", "-", "x", "÷", "(", ")", ".", "b", "C", "+"];

        for (let x of operator) {
            const El = document.createElement(this.type)
            const text = document.createTextNode(x)
            El.appendChild(text)
            El.id = `btn${x.charCodeAt(0)}`
            El.className = this.className
            document.getElementById(this.parent).appendChild(El)
        }
    }
}

function css_set() {
    // document.getElementById("btn98").innerHTML = "<img src=\"../sonwong/back.png\"></img>"
    document.getElementById("btn247").innerHTML = "<img src=\"../sonwong/division.png\"></img>"
    document.getElementById("btn98").innerHTML = "<img src=\"../sonwong/del_button.svg\"></img>"
}





const pad_box = new MakeBox("div", "pad_box","#container")
const main_container = new MakeBox("div", "container","body")
const num_button = new MakeNumButton("button","btn","pad_box")
const operator_button = new MakeOperatorButton("button", "btn op", "pad_box")


const dis_container = new MakeBox("div", "dis_container", "#container")
const modify_display = new MakeBox("div", "display2", "#dis_container");
const result_display = new MakeBox("div", "display1", "#dis_container");



function ui() {
    main_container.make_box()
    pad_box.make_box()
    num_button.make_button()
    dis_container.make_box()
    modify_display.make_box()
    result_display.make_box()
    operator_button.make_operator()
    css_set()
}



export {ui, MakeBox}