
// 외부로 부터 더미데이터 받음
let calc_storage =["1+1=2", "2+2=4","2+8+7=17"]
    // ["1+1=2", "2+2=4"]

let modify = "4+4="
let result = "8"
let connected_modify = modify + result


calc_storage.push(connected_modify)
let send =[]

for( x of calc_storage){
    window.localStorage.setItem(calc_storage.indexOf(x), x)

}

for (let i=0; i < localStorage.length; i++) {

    let call = window.localStorage.getItem(i)
    create_button(i, call)
}

function create_button(id_set, text) {
    
    const El = document.createElement("button");
    const Text = document.createTextNode(text)
    El.appendChild(Text)
    El.id = `btn${id_set}`
    let Div =document.getElementById("history_container")
    Div.appendChild(El)
    document.body.appendChild(Div)
    
}

for (let i = 0; i<localStorage.length ; i++) {
    const El = document.querySelector(`#btn${i}`)
    El.addEventListener("click", function(){
        const local_deta = window.localStorage.getItem(i);
        const local_data = local_deta.split("=")
        local_data[0]= local_data[0]+"="
        
        send= local_data
        
    }
    )
}

const delete_button = document.getElementById("history_delete")
delete_button.addEventListener("click", () => {
    window.localStorage.clear()
    document.querySelector("div").innerHTML = ""    
    // let button = document.querySelector('[id^="btn"]')
    // button.remove()

    
})

