# Typescript

## Getting Started

### Install Typescript

```bash
npm install -g typescript
```

### Compile Typescript

```bash
tsc <filename>.ts
```

```bash
tsc <filename>.ts <filename>.js
```

_The second filename is the destination file, if you don't specify it, it will be the same as the first filename_

```bash
tsc <filename>.ts --watch
```

_The --watch flag tells the compiler to watch for changes in the file and compile it automatically_

**Now the question arises what if we want to compile the js file and put it somewhere else?.**

You need a tsconfig file for this.

### tsconfig.json

```bash
  tsc --init
```

**NOTE** : If the above code gives you error then use the following code

```bash
  tsc.cmd --init
```

This is because the tsc command is not recognized by the system. So we need to use the tsc.cmd command.

tsc is a bash script that calls node with the tsc.js file. The tsc.cmd is a windows batch file that calls node with the tsc.js file.

This will create a tsconfig.json file in your project directory.

**Once you have your tsconfig.js file ready you need to open it and change the following properties**

rootDir: This is the directory where your typescript files are located.

```json
  "rootDir": "./src",
```

outDir: This is the directory where you want your js files to be compiled.

```json
  "outDir": "./dist",
```

Now that this configuration is done, you can go ahead and compile your typescript files using the following command.

```bash
  tsc -w
```

This will keep watching for changes in your typescript files and compile them automatically.

### Run Typescript

```bash
node <filename>.js
```

## Types

### Boolean

```typescript
let isDone: boolean = false;
```

### Number

```typescript
let decimal: number = 6;

let hex: number = 0xf00d;

let binary: number = 0b1010;

let octal: number = 0o744;
```

### How to use these numbers?

```typescript
//Let's say i want to call a function to add two numbers

const sum = (a,b)=>{
  return (a+b)
}

let a = 12;
let b = '6';

//now if i run this , i will get 126 as output as 6 is string .
// As a user is very unpredictable , there is a chance that you can get a string as input.
// TypeScript warns you here that  there is a chance that any other datatype.

console.log(sum(a,b));

//TypeScript way of declaring this function

const add = (a:number,b:number):number{
  return (a+b);
}

//Thus Now in the  method signature , a and b are declared as  numbers ,
// also the return type of the function is also declared as a number
//so we make sure that the function doesn't perform concatenation.



```

Now lets say you don't want the compiler to compile the code if there is a typescript warning .Search and uncomment the following in the tsconfig file.

```json
  "noEmitOnError": true,
```

Also if you don't want this configuration globally then you can run this command in your terminal.

This will only compile the file if there is no error.

```bash
  tsc <filename>.ts --noEmitOnError
```

or

This will watch for changes in the file and compile it only if there is no error.

```bash
  tsc  --noEmitOnError -w
```

### String

```typescript
let color: string = "blue";

color = "red";
```

### Array

```typescript
let list: number[] = [1, 2, 3];

let list: Array<number> = [1, 2, 3];
```

### Tuple

```typescript
let x: [string, number];

x = ["hello", 10]; // OK

x = [10, "hello"]; // Error
```

### Enum

Enums stands for Enumerations. Enums are a new data type supported in TypeScript. It is used to define the set of named constants, i.e., a collection of related values. TypeScript supports both numeric and string-based enums. We can define the enums by using the enum keyword.

```typescript
enum Color {
  Red,
  Green,
  Blue
}

* Enums are useful in TypeScript because of the following:

    * It makes it easy to change values in the future.
    * It reduces errors which are caused by transporting or mistyping a number.
    * It exists only during compilation time, so it does not allocate memory.
    * It saves runtime and compile-time with inline code in JavaScript.
    * It allows us to create constants that we can easily relate to the program.
    * It will enable developers to develop memory-efficient custom constants in JavaScript, which does not support enums, but TypeScript helps us to access them.

let c: Color = Color.Green;
```

### Any

```typescript
let notSure: any = 4;

notSure = "maybe a string instead";

notSure = false; // okay, definitely a boolean
```

### Void

The void data types means that the var doesn't have any type. It is used in functions that don't return anything.

```typescript
function warnUser(): void {
  console.log("This is my warning message");
}
```

### Null and Undefined

```typescript
let u: undefined = undefined;

let n: null = null;
```

### Never

The never type is used when you are sure that something is never going to occur.
For example, you write a function that throws an error, then the return type of the function will be never.

```typescript
function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("Something failed");
}

function infiniteLoop(): never {
  while (true) {}
}
```

### Union

If you want a var to possess more than one type, then you can use the union type.

```typescript
let unionType: number | string;
unionType = 1; // OK
unionType = "Hello"; // OK
unionType = false; // Compiler Error: Type 'boolean' is not assignable to type 'string | number'
```

### Regular Expression

```typescript
let reg: RegExp = new RegExp("ab+c");
```

```typescript
let reg: RegExp = /\w+/g;
```

### Object

```typescript
declare function create(o: object | null): void;

create({ prop: 0 }); // OK

create(null); // OK

create(42); // Error

create("string"); // Error

create(false); // Error

create(undefined); // Error
```

### Type assertions

```typescript
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

## Variable Declarations

### var declarations

```typescript
var a = 10;
```

### let declarations

```typescript
let hello = "Hello!";
```

### const declarations

```typescript
const numLivesForCat = 9;
```

## Interfaces

```typescript
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```

### Optional Properties

```typescript
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });
```

### Readonly properties

```typescript
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
```

### Function Types

```typescript
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};
```

### Indexable Types

```typescript
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
```

### Class Types

```typescript
interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  constructor(h: number, m: number) {}
}
```

### Extending Interfaces

```typescript
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
```

### Hybrid Types

```typescript
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) {};
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

### Interfaces Extending Classes

```typescript
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

// Error: Property 'state' is missing in type 'Image'.

class Image implements SelectableControl {
  select() {}
}

class Location {}
```

## Classes

### Basic
