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

```typescript
enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Green;
```

### Any

```typescript
let notSure: any = 4;

notSure = "maybe a string instead";

notSure = false; // okay, definitely a boolean
```

### Void

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
mySearch = function(src: string, sub: string): boolean {
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
  let counter = <Counter>function(start: number) {};
  counter.interval = 123;
  counter.reset = function() {};
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

