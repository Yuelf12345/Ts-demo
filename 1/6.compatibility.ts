interface Named {
  name: string;
}
class Person {
  name: string;
}
let p: Named;
// OK, because of structural typing
p = new Person();
// 如果a要兼容b，那么b至少具有与a相同的属性。比如
let a: Named;
let b = { name: "Alice", age: 25 };
a = b;

// 函数兼容
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;
y = x;
// x = y; 错误 因为y比x多一个参数s

// 类
class Animal {
  feet: number;
  constructor(name: string, numFeet: number) {}
}
class Size {
  feet: number;
  constructor(numFeet: number) {}
}

let l: Animal;
let s: Size;

// l = s;
// s = l;

// 泛型
interface Empty<T> {
}
let x1: Empty<number>;
let y1: Empty<string>;

// x1 = y1; 

interface NotEmpty<T> {
    data: T;
}
let x2: NotEmpty<number>;
let y2: NotEmpty<string>;

// x2 = y2;  // Error, because x and y are not compatible
