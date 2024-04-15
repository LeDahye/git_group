// 디스플레이 생성
let display1 = document.createElement('div');
let display2 = document.createElement('div');

display1.id = 'display1';
display2.id = 'display2';

document.body.appendChild(display1);
document.body.appendChild(display2);

// 버튼생성
let btn1 = document.createElement('button');
let btn2 = document.createElement('button');

btn1.id = 'btn1';
btn2.id = 'btn2';

document.body.appendChild(btn1);
document.body.appendChild(btn2);

// 클릭이벤트(수식창,display1)
btn1.addEventListener('click', function() {
    let text = 1;
    let d1 = display1.innerHTML;
    let d2 = display2.innerHTML;

// 조건문(연산시 d2삭제,기존 d2값 d1으로 이동)
    if (d1 !== '' && d2 !== '') {
        let display2Text = document.getElementById('display2').innerHTML;
        document.getElementById('display1').innerHTML = null;
        document.getElementById('display1').innerHTML += display2Text;
        document.getElementById('display2').innerHTML = null;
    }
        else {
        document.getElementById('display1').innerHTML += text;
    }
    });

//클릭이벤트(결과창,display2)
btn2.addEventListener('click', function () {
    let text2 = 2;
    document.getElementById('display2').innerHTML += text2;
});

