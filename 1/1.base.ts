let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let userName: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${userName}.
I'll be ${age + 1} years old next month.`;

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, 'hello']; // Error
// x[3] = 'world'; // Error, tuple type '[string, number]' of length '2' has no element at index '3'

enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Green;
let colorName: string = Color[2];
console.log(c, colorName);

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
notSure.ifItExists(); // okay, if it exists
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: unknown = 4;
prettySure = "maybe a string instead";
prettySure = false; // okay, definitely a boolean
// prettySure.ifItExists(); // Error, Object is of type 'unknown'.

function warnUser(): void {
    console.log("This is my warning message");
}
let unusable: void = undefined;
let u: undefined = undefined;
let n: null = null;

function error(message: string): never {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop(): never {
    while (true) {}
}

declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error, number is not an object

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length; // Using 'as' syntax
let strLength2: number = (<string>someValue).length; // Using angle-bracket syntax