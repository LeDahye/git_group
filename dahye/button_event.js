function btnNum() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        // Id = 지훈 인터페이스 숫자 값
        document.getElementById(`btn${i}`).addEventListener("click",
            function () {
                text += i;
                // Id = 선웅 디스플레이 값
                document.getElementById("display").innerHTML = text;
            })
    }
    
}
btnNum()