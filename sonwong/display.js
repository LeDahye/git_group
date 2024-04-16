class Calculator {
    constructor() {
        // all로 묶기
        this.all=document.createElement('div');
        document.body.appendChild(this.all);
        
        // display1생성
        this.display1 = document.createElement('div');
        this.display1.id = 'display1';
        this.all.appendChild=(this.display1);

        // display2생성
        this.display2 = document.createElement('div');
        this.display2.id = 'display2';
        this.all.appendChild=(this.display2);
    }

    // 기능(조건문)
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
