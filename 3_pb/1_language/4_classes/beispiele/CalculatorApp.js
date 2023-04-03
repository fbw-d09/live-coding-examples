console.clear();

class Calculator
{
    solution;

    constructor()
    {
        this.solution = 0;
    }

    add(num1, num2)
    {
        this.solution = num1 + num2;
    }

    divide(num1, num2)
    {
        this.solution = num1 / num2;
    }

    getSolution()
    {
        return this.solution;
    }
}

const calc = new Calculator();

calc.add(2, 5);

console.log(calc.getSolution())

calc.divide(6, 3);

console.log(calc.getSolution());

calc.add(calc.getSolution(), 8);

console.log(calc.getSolution());
