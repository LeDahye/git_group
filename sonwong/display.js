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

    // 기능1(d1, d2 값이 있으면 d2 -> d1으로 이동, d2 초기화)
    show(value) {
        if (value === 1) {
            let d1 = this.display1.innerHTML;
            let d2 = this.display2.innerHTML;

            if (d1 !== '' && d2 !== '') {
                d1 = d2;
                d2 = '';
            } else {
                d1 += value;
            }
        } else if (value === 2) {
            d2 += value;
        }
        this.display1.innerHTML = d1;
        this.display2.innerHTML = d2;
    }

    //기능2(숫자 버튼 입력시  d1,d2에 값이 있으면 d1,d2 초기화)
    two(num) {
        let d3 = this.display1.innerHTML;
        let d4 = this.display2.innerHTML;

        if (!isNaN(num)) {
            d3 = '';
            d4 = '';
            d3 += num;
            d4 += num;
        }
        this.display1.innerHTML = d3;
        this.display2.innerHTML = d4;
    }
}


// Calculator 객체 생성
const calculator1 = new Calculator();

const display2 = document.getElementById("display2")
document.getElementById("dis_container").appendChild(display2)
const display1 = document.getElementById("display1")
document.getElementById("dis_container").appendChild(display1)




