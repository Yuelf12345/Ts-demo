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
