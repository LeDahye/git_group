class Calculator {
    constructor() {
        // display1 생성
        this.display1 = document.createElement('div');
        this.display1.id = 'display1';
        document.body.appendChild(this.display1);
        
        // display2 생성
        this.display2 = document.createElement('div');
        this.display2.id = 'display2';
        document.body.appendChild(this.display2);
    }
    
    // 기능(d1, d2 값이 있으면 d2 -> d1으로 이동, d2 초기화)
    show(value) {
        if (value === 1) {
            let display1Text = this.display1.innerHTML;
            if (display1Text !== '' && this.display2.innerHTML !== '') {
                this.display1.innerHTML = this.display2.innerHTML;
                this.display2.innerHTML = '';
            } else {
                this.display1.innerHTML += value;
            }
        } else if (value === 2) {
            this.display2.innerHTML += value;
        }
    }
}

// Calculator 객체 생성
const calculator1 = new Calculator();
