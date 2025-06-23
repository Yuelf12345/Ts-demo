enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

console.log(Direction.Up);

// 
enum E1 { X, Y, Z }
enum E2 {
    A = 1, B, C
}

const e1 = E1.X;
console.log(e1); // 0
const e2 = E2.B;
console.log(e2); // 2

// 常量枚举 适合高性能场景（如频繁访问的常量）。编译后消失，需确保所有使用处可静态分析。
const enum Enum {
    A = 1,
    B = A * 2
}
// 声明枚举 仅类型声明，需配合 .d.ts 文件描述外部枚举。常见于 DefinitelyTyped 中的库类型定义。
declare enum Enum2 {
    A = 1,
    B,
    C = 2
}