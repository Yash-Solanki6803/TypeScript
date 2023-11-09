# Referencing key-value in object

## Referencing key-value in object

```js
const obj = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

// Referencing key-value in object
console.log(obj.name); // John
console.log(obj["name"]); // John
console.log(obj.address.city); // New York
console.log(obj["address"]["city"]); // New York
```

## Difference between dot notation and bracket notation

Certainly! Let's dive into the details of dot notation and bracket notation in JavaScript objects.

**Dot Notation:**

_Pros:_

1. **Simplicity:** Dot notation is straightforward and easy to read. It's concise and often preferred when the key is a valid identifier (starts with a letter, contains only letters, numbers, or underscores).

2. **Convenience:** It is convenient for accessing properties when you know the key at the time of writing the code.

_Cons:_

1. **Dynamic Key Access:** Dot notation doesn't allow for dynamic key access. You can't use a variable to access a property dynamically.

2. **Special Characters:** It cannot be used when the key contains special characters or starts with a number.

_Example:_

```javascript
const person = {
  name: "John",
  age: 25,
  address: {
    city: "New York",
    zip: "10001",
  },
};

console.log(person.name); // Output: John
console.log(person.address.city); // Output: New York
```

**Bracket Notation:**

_Pros:_

1. **Dynamic Key Access:** Bracket notation allows dynamic key access using variables. This is useful when the key is not known until runtime.

2. **Special Characters:** Bracket notation can be used for keys with special characters or keys that start with a number.

_Cons:_

1. **Readability:** It might be considered less readable than dot notation, especially for simple and well-known keys.

_Example:_

```javascript
const person = {
  name: "John",
  age: 25,
  address: {
    city: "New York",
    zip: "10001",
  },
};

const key = "name";
console.log(person[key]); // Output: John

const dynamicKey = "age";
console.log(person[dynamicKey]); // Output: 25

const specialKey = "address";
console.log(person[specialKey].city); // Output: New York
```

**Difference:**
The primary difference lies in how you access the property:

1. Dot notation uses a literal key after the object.

   ```javascript
   object.key;
   ```

2. Bracket notation uses a variable or a string (including special characters) to dynamically access the property.
   ```javascript
   object["key"];
   ```

In summary, dot notation is cleaner and more convenient for known keys, while bracket notation is more versatile, allowing dynamic access and handling special cases. The choice depends on the specific use case and the nature of the keys you're working with.
