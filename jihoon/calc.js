//Div박스 생성 클래스
class Make_box{
    constructor(type,El_name,parent) {
        this.type = type;
        this.El_name = El_name
    }
    make() {
        const El = document.createElement(this.type)
        El.id = this.El_name
        document.body.appendChild(El)
    }
}

//박스 삽입 클래스
class insert_box{
    constructor(parent, child) {
        this.parent = parent;
        this.child = child;
    }
    insert_box() {
        const parent = document.getElementById(this.parent)
        const child = document.getElementById(this.child)
        parent.appendChild(child)
        
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
        // this.type = type
        // this.className = className
        // this.parent = parent
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



const history_box = new Make_box("div","history_box")

const insert_PinC = new insert_box("container","pad_box")

const pad_box = new Make_box("div", "pad_box")

const main_container = new Make_box("div", "container")

const num_button = new make_num_button("button","btn","pad_box")

const operator_button = new make_operator_button("button", "btn operate", "pad_box")

const insert_display = new insert_box("container","dis_container")

const display_box = new Make_box("div", "dis_container")

pad_box.make()
main_container.make()
insert_PinC.insert_box()
num_button.make()
operator_button.make()
display_box.make()
insert_display.insert_box()
css_set()





// export {pad_box,num_button,operator_button,main_container,insert_PinC,css_set,insert_test,history_box }