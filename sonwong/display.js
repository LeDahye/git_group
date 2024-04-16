class Calculator {
    constructor() {
        // 부모 div 생성
        this.container = document.createElement('div');
        
        // display1 생성
        this.display1 = document.createElement('div');
        this.display1.id = 'display1';
        this.container.appendChild(this.display1);
        
        // display2 생성
        this.display2 = document.createElement('div');
        this.display2.id = 'display2';
        this.container.appendChild(this.display2);

        // 부모 요소를 문서 body에 추가
        document.body.appendChild(this.container);
    }
    
    // 기능(d1, d2 값이 있으면 d2 -> d1으로 이동, d2 초기화)
    show(value) {
        if (value === 1) {
            // display1에 있는 수식을 가져와서 display2에 있는 결과값을 display1으로 이동
            let display1Text = this.display1.innerHTML;
            let display2Text = this.display2.innerHTML;

            if (display1Text === '') {
                // display1이 비어있으면 display2의 내용을 display1으로 이동하고 display2를 초기화
                this.display1.innerHTML = display2Text;
                this.display2.innerHTML = '';
            } else {
                // display1이 비어있지 않으면 display2의 내용을 display1 뒤에 이어서 추가
                this.display1.innerHTML += display2Text;
                this.display2.innerHTML = '';
            }
        } else if (value === 2) {
            // display2에 숫자나 연산자 추가
            this.display2.innerHTML += value;
        }
    }
}

// Calculator 객체 생성
const calculator1 = new Calculator();