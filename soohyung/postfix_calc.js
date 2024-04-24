

const equal_cal = {
    sym_change: function sym_change(modify) {
        let temp = '';
        for (let i = 0; i < modify.length; i++) {
            switch (modify[i]) {
                case 'x':
                    temp += '*';
                    break;
                case '÷':
                    temp += '/';
                    break;
                default:
                    temp += modify[i];
            }
        }
        return temp;
    },

    add_x: function add_x(modify) {
        return modify.replace(/\)\(/g, ')*(');
    },

    // -5 (+) -5 = -10
    add_plus: function add_Plus(modify) {
        return modify = modify.replace(/(?<=\d)(-)(?=\d)/g, '+-')
    },

    del_equal_bt: function del_equal_bt(modify) {
        if (modify[modify.length - 1] === '=') {
            return modify.slice(0, -1);
        }
        return modify;
    },

    convert_to_arr: function convert_to_arr(modify) {
        return modify.match(/(?:\d+\.\d+|\d+\.\d*|\.\d+|-?\d+(?:\.\d+)?|\+|\-|\*|\/|\(|\))/g);
    },

    priority_fn: function priority_fn(priority) {
        switch (priority) {
            case '*':
            case '/':
                return 3;
            case '+':
            case '-':
                return 2;
            case '(':
                return 1;
            default:
                return 0;
        }
    },

    convert_to_post: function convert_to_post(sikArr) {
        let stack = [];
        let result = [];

        for (let i = 0; i < sikArr.length; i++) {
            if (!isNaN(sikArr[i])) {
                result.push(sikArr[i]);
            } else if (sikArr[i] === '(') {
                stack.push(sikArr[i]);
            } else if (sikArr[i] === ')') {
                while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                    result.push(stack.pop());
                }
                stack.pop();
            } else {
                while (stack.length > 0 && this.priority_fn(stack[stack.length - 1]) >= this.priority_fn(sikArr[i])) {
                    result.push(stack.pop());
                }
                stack.push(sikArr[i]);
            }
        }

        while (stack.length > 0) {
            result.push(stack.pop());
        }
        return result;
    },

    cal_postfix: function cal_postfix(postfix_result) {
        let stack = [];

        for (let i = 0; i < postfix_result.length; i++) {
            if (!isNaN(postfix_result[i])) {
                stack.push(parseFloat(postfix_result[i]));
            } else {
                let num2 = stack.pop();
                let num1 = stack.pop();
                if (postfix_result[i] === '*') {
                    stack.push(num1 * num2);
                } else if (postfix_result[i] === '/') {
                    stack.push(num1 / num2);
                } else if (postfix_result[i] === '-') {
                    stack.push(num1 - num2);
                } else if (postfix_result[i] === '+') {
                    stack.push(num1 + num2);
                }
            }
        }
        return stack.pop().toString();
    }
}


function equal_bt_click(modify) {
    modify = equal_cal.sym_change(modify);
    modify = equal_cal.add_x(modify);
    modify = equal_cal.add_plus(modify);
    modify = equal_cal.del_equal_bt(modify);
    modify = equal_cal.convert_to_arr(modify);
    modify = equal_cal.convert_to_post(modify);
    return equal_cal.cal_postfix(modify);

}



export { equal_bt_click, equal_cal };
