function identity0(arg: number):number{
  return arg;
}
identity(2)
function identity2<T>(arg: T): T {
  return arg;
}

// 泛型类型
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity1: <T>(arg: T) => T = identity;
let myIdentity2: <U>(arg: U) => U = identity;
let myIdentity3: {<T>(arg: T): T} = identity;
interface GenericIdentityFn {
    <T>(arg: T): T;
}
let myIdentity4: GenericIdentityFn = identity;
interface GenericIdentityFn2<T> {
    (arg: T): T;
}
let myIdentity5: GenericIdentityFn2<number> = identity;

// 泛型约束
interface Lengthwise {
    length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

// loggingIdentity(3);// error
loggingIdentity({length: 10, value: 3});