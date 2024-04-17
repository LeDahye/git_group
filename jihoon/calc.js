//Div박스 생성 클래스
class Make_box{
    constructor(type,El_name,parent) {
        this.type = type;
        this.El_name = El_name
        this.parent = parent
    }
    make() {
        const El = document.createElement(this.type)
        El.id = this.El_name   
        document.querySelector(this.parent).appendChild(El)
    }
}

//숫자 패드 생성 클래스
class make_num_button{
    constructor(type,className,parent) {
        this.type = type;
        this.className = className
        this.parent = parent;
    }
    make() {
        for (let i = 0; i<10;i++){
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
class make_operator_button extends make_num_button{
    constructor(type,className,parent) {
        super(type,className,parent)
    }

    make() {
        const operator=["=", "-", "x", "&divide", "(", ")", ".", "b", "C", "+"];
        
        for(let x of operator){
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
    document.getElementById("btn98").innerHTML = "<img src=\"../jihoon/back.png\"></img>"
    document.getElementById("btn38").innerHTML = "<img src=\"../jihoon/division.png\"></img>"
    
}



const history_box = new Make_box("div","history_box","#container")
const pad_box = new Make_box("div", "pad_box","#container")
const main_container = new Make_box("div", "container","body")
const num_button = new make_num_button("button","btn","pad_box")
const operator_button = new make_operator_button("button", "btn operate", "pad_box")
 


function ui() {
    
main_container.make()
pad_box.make()
num_button.make()
operator_button.make()
history_box.make()
css_set()
}

export default ui