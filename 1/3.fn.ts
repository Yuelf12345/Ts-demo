// Named function
function add(x: number, y: number): number {
  return x + y;
}

// Anonymous function
let myAdd = function (x: number, y: number): number {
  return x + y;
};

// Arrow function
let myAdd2 = (x: number, y: number): number => {
  return x + y;
};

// Function type
let myAdd3: (baseValue: number, increment: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

console.log(add(1, 2));

// Optional parameters
function buildName(firstName: string, lastName?: string): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

let result1 = buildName("Bob"); // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
let result3 = buildName("Bob", "Adams"); // ah, just right

// Rest parameters
function buildName2(firstName: string, ...restOfName: string[]): string {
  return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");

// 重载
function add2(x: number, y: number): number;
function add2(x: string, y: string): string;
function add2(x: any, y: any): any {
  return x + y;
}

add2(1, 2);