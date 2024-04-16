class Calculator {
    constructor() {
        this.display1 = document.createElement('div');
        this.display2 = document.createElement('div');
        // this.btn1 = document.createElement('button');
        // this.btn2 = document.createElement('button');

        this.display1.id = 'display1';
        this.display2.id = 'display2';
        // this.btn1.id = 'btn1';
        // this.btn2.id = 'btn2';

        // this.btn1.textContent = 'Display1 버튼';
        // this.btn2.textContent = 'Display2 버튼';

        // this.btn1.addEventListener('click', () => this.show(1)); // display1에 연결
        // this.btn2.addEventListener('click', () => this.show(2)); // display2에 연결

        document.body.appendChild(this.display1);
        document.body.appendChild(this.display2);
        // document.body.appendChild(this.btn1);
        // document.body.appendChild(this.btn2);
    }

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
