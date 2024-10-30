// Functions --> 1. Normal Function 2. Arrow Function

// normal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(2, 4);

// arrow function
const addNum = (num1: number, num2: number): number => num1 + num2;

// object --> function --> method
// if there is any object inside a function, we call it a method

const poorUser = {
  name: "Jamil",
  balance: 0,
  addBalance(balance: number): string {
    return `New balance is ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 4, 5];
const newArr: number[] = arr.map((elem: number): number => elem * elem);
