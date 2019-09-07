//https://www.tslang.cn/docs/handbook/basic-types.html
// npm run 01

// boolean
let isDone: boolean = false;

// number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// String
let nametypes: string = "bob";
nametypes = "smith";

// array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
x = ['hello', 10];

// enum
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;



// 5 special type

// 1, void
function warnUser(): void {
    // console.log("This is my warning message");
}
warnUser();

// 2. null
let u: undefined = undefined;

// 3. undefined
let n: null = null;

// 4. Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// 5. Never
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}





















