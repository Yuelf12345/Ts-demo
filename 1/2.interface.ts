function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}
const myObj = {
  size: 10,
  label: "Size 10 Object",
};
printLabel(myObj);

// optional properties
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({color: "black"});

// readonly properties
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!
/**
 * interface ReadonlyArray<T> {
 *   readonly [index: number]: T;
 * }
 */
let a: ReadonlyArray<number> = [1, 2, 3, 4];
// a[0] = 12; // error!

// 额外的属性检查
// let mySquare1 = createSquare({color: "black", height: 20});
// Error: Object literal may only specify known properties, and 'height' does not exist in type 'SquareConfig'.
let mySquare2 = createSquare({color: "black", height: 20} as SquareConfig);
// 解决方法：使用索引签名
interface SquareConfig {
  [propName: string]: any; // 允许任意属性
  color?: string;
  width?: number;
}
let mySquare3 = createSquare({color: "black", height: 20});

// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = (source: string, subString: string) => {
  let result = source.search(subString);
  return result > -1;
};

// 可索引的类型
interface StringArray {
  [index: number]: string; // 索引签名
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];
interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  // name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray1: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!

// 类类型
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}
class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {}
}

/**
 * interface ClockConstructor {
 *     new (hour: number, minute: number);
 * }
 *
 * class Clock implements ClockConstructor {
 *     currentTime: Date;
 *     constructor(h: number, m: number) { }
 * }
 */

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) {
        this.currentTime = new Date();
        this.currentTime.setHours(h, m);
    }
    setTime(d: Date) {
        this.currentTime = d;
    }
}

class AnalogClock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) {
        this.currentTime = new Date();
        this.currentTime.setHours(h, m);
    }
    setTime(d: Date) {
        this.currentTime = d;
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
console.log('digital',digital);
console.log('analog',analog);

// 接口继承
interface Shape {
    color: string;
}
interface Square extends Shape {
    sideLength: number;
}
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;

// 混合类型
interface Counter {
    (start: number): string; // 函数类型
    interval: number; // 属性
    reset(): void; // 方法
}
function getCounter(): Counter {
    let counter = <Counter>function (start: number) {
        console.log(`Counter started at ${start}`);
        return `Counter: ${start}`;
    };
    counter.interval = 1000;
    counter.reset = () => {
        console.log("Counter reset");
    };
    return counter;
}
let c = getCounter();
c(10); // 调用函数
c.interval = 500; // 设置属性
c.reset(); // 调用方法

// 接口继承类
class Control {
    private state: any;
    constructor(s) {
        this.state = s;
    }
}
interface SelectableControl extends Control {
    select(): void; // 继承类的接口
}
class Button extends Control implements SelectableControl {
    select() {
        console.log("Button selected");
    }
    constructor(state) {
        super(state);
    }
}
let button = new Button(123);
let control: Control = button; // 允许将Button赋值给Control
console.log(button);
