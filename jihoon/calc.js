
//계산기 객체
const calc_main = {

    dispaly_tag: "div",

    pad_tagName: "button",

    operate: ["=", "-", "x", "&divide", "(", ")", ".", "b", "C", "+"],


    // form, container ★★★★★main작업★★★★★
    constructure_set: function () {

        const form_tag = document.createElement("div")
        const container_tag = document.createElement("div")
        container_tag.className = "container"

        form_tag.setAttribute("name", "key")
        form_tag.appendChild(container_tag)
        document.body.appendChild(form_tag)
        this.make_num_pad(this.pad_tagName)
        this.set_grid()
        this.make_operate_pad(this.pad_tagName, this.operate)
        this.css_set()
        this.display(this.dispaly_tag)

    },
    //연산자버튼 생성 함수
    make_operate_pad: function (tagName, operate) {
        for (x of operate) {
            const El = makeELtool(tagName, x, `btn${x.charCodeAt(0)}`,"btn")
            document.querySelector(".container").appendChild(El)
        }

    },
    //디스플레이 생성 함수
    display: function (dispaly_tag) {

        const El = makeELtool(dispaly_tag, "", "display")
        document.body.appendChild(El)
    },
    // 숫자버튼 생성 함수
    make_num_pad: function (pad_tagName) {

        for (let i = 0; i < 10; i++) {
            const El = makeELtool(pad_tagName, i, `btn${i}`,"btn NumBtn");
            document.querySelector(".container").appendChild(El)
        }
    },
    //그리드 설정 함수
    set_grid: function () {
        const board = document.querySelector(".container")
        board.style.display = "grid"
    },
    css_set: function () {
        document.getElementById("btn98").innerHTML = "<img src=\".././jihoon/back.png\"></img>"
        document.getElementById("btn38").innerHTML = "<img src=\".././jihoon/division.png\"></img>"

    },
}

calc_main.constructure_set()


//전역 편의 기능 함수
function makeELtool(tag, text, idname,claaname) {

    const tagEl = document.createElement(tag)
    const textEl = document.createTextNode(text)
    tagEl.appendChild(textEl);
    tagEl.id = idname
    tagEl.className = claaname

    return tagEl

}






