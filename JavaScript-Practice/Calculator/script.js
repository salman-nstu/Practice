const calculator = {
    expression: '0',
    historyList: [],

    screenElement: document.getElementById('screen'),
    historyElement: document.getElementById('history'),

    appendNumber(number) {
        const segments = this.expression.split(/[\+\-\*\/\%]/);
        const lastSegment = segments[segments.length - 1];

        if (number === '.' && lastSegment.includes('.')) return;

        if (this.expression === '0' && number !== '.') {
            this.expression = number;
        } else {
            this.expression = `${this.expression}${number}`;
        }

        this.updateDisplay();
    },

    appendOperator(op) {
        const lastChar = this.expression.slice(-1);
        const operators = ['+', '-', '*', '/', '%'];

        if (operators.includes(lastChar)) {
            this.expression = this.expression.slice(0, -1) + op;
        } else {
            this.expression += op;
        }

        this.updateDisplay();
    },

    calculate() {
        try {
            if (!this.expression) return;

            const result = Function(`return (${this.expression}.)`)();

            if (!isFinite(result)) {
                throw new Error("Invalid operation");
            }

            this.historyList.push(`${this.expression} = ${result}`);

            this.expression = `${result}`;
            this.updateDisplay();
        } catch (error) {


            this.screenElement.textContent = 'Error';
            this.expression = '0';
        }
    },

    deleteLast() {
        this.expression = this.expression.slice(0, -1);
        if (this.expression === '' || this.expression === '-') {
            this.expression = '0';
        }
        this.updateDisplay();
    },

    clearAll() {
        this.expression = '0';
        this.historyList = [];
        this.historyElement.textContent = '';
        this.updateDisplay();
    },

    updateDisplay() {
        this.screenElement.textContent = this.expression;

        //slice
        if (this.historyList.length > 0) {
            //const lastHistory = this.historyList.slice(-1)[0];
            const lastHistory = this.historyList[this.historyList.length - 1];

            this.historyElement.textContent = lastHistory;
        } else {
            this.historyElement.textContent = '';
        }
    }
};

calculator.updateDisplay();