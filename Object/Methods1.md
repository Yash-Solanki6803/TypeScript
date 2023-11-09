Certainly! Let's start with `Object.prototype` and its methods.

**Object.prototype:**
In JavaScript, `Object.prototype` is an object from which all other objects inherit their properties. It serves as the prototype for all objects, and many methods are available on it that can be used by any object.

**Methods of Object.prototype:**

1. **toString():**

   - Returns a string representation of the object.

   ```javascript
   const exampleObject = { key: "value" };
   console.log(exampleObject.toString()); // Output: [object Object]
   ```

2. **hasOwnProperty(propertyName):**

   - Returns a boolean indicating whether the object has the specified property as its own (not inherited).

   ```javascript
   const exampleObject = { key: "value" };
   console.log(exampleObject.hasOwnProperty("key")); // Output: true
   ```

3. **isPrototypeOf(object):**
   - Returns a boolean indicating whether the object is a prototype of the specified object.
   ```javascript
   const examplePrototype = { method: function () {} };
   const exampleObject = Object.create(examplePrototype);
   console.log(examplePrototype.isPrototypeOf(exampleObject)); // Output: true
   ```

Now, let's talk about polymorphic and non-polymorphic methods.

**Polymorphic Method:**
A polymorphic method is a method that can be used on objects of multiple types, and it behaves differently based on the type of the object it is called on. JavaScript often achieves polymorphism through method overloading or using a single method that adapts its behavior based on the object's type.

Example with `toString()`:

```javascript
const array = [1, 2, 3];
const string = "Hello";

console.log(array.toString()); // Output: 1,2,3
console.log(string.toString()); // Output: Hello
```

`toString()` is polymorphic because it behaves differently for an array and a string, adapting its behavior based on the type of the object.

**Non-polymorphic Method:**
A non-polymorphic method has a fixed behavior regardless of the type of the object it is called on. The method's functionality remains the same, and it doesn't adapt based on the object's type.

Example with `hasOwnProperty()`:

```javascript
const exampleObject = { key: "value" };
console.log(exampleObject.hasOwnProperty("key")); // Output: true

const exampleArray = [1, 2, 3];
console.log(exampleArray.hasOwnProperty(0)); // Output: true
```

`hasOwnProperty()` is non-polymorphic because it checks if the property exists on the object, regardless of the object's type.

Now, tying it back to `Object.prototype`, the methods discussed (`toString()`, `hasOwnProperty()`, `isPrototypeOf()`) are available on `Object.prototype`. They can be used on any object because all objects inherit from `Object.prototype`, showcasing polymorphic behavior.
