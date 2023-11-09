# Ways to declare an Object

## 1. Object Literal

```javascript
const person = {
  name: "John",
  age: 30,
};
```

## 2. Constructor Function

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = new Person("John", 30);
```

## 3. Object.create()

```javascript
const person = Object.create({ name: "John", age: 30 });
```

## 4. Class

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person("John", 30);
```

## 5. Singleton

```javascript
const person = new (function () {
  this.name = "John";
  this.age = 30;
})();
```

## 6. Factory Function

```javascript
function createPerson(name, age) {
  return {
    name,
    age,
  };
}

const person = createPerson("John", 30);
```

## 7. Prototype

```javascript
function Person() {}
Person.prototype.name = "John";
Person.prototype.age = 30;

const person = new Person();
```

## 8. Object.assign()

```javascript
const person = Object.assign(Object.create({ name: "John", age: 30 }));
```

## 9. Mixins

```javascript
const person = Object.assign(
  Object.create({ name: "John" }),
  Object.create({ age: 30 })
);
```
