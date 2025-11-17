
### What are some differences between interfaces and types in TypeScript?

###### TypeScript-এ interface এবং type দুইটি ব্যবহার করা হয় ডাটা structure বা টাইপ define করতে, কিন্তু তাদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

### interface
Interface হলো একটি blueprint বা নকশা যা বলে দেয় object বা class-এর মধ্যে কি কি property এবং method থাকবে। মূলত OOP (Object Oriented Programming) friendly।

Compile-time safety দেয়, অর্থাৎ ভুল property বা type ব্যবহার করলে কোড চলার আগেই error দেখায়।

### সুবিধা:
    1. Class implement করার জন্য।
    2. Compile-time safety → ভুল property বা type ব্যবহারে error।
    3. more

### Interface যা করতে পারে না:
    1. Union type তৈরি করতে পারে না
    2. Tuple type তৈরি করতে পারে না
    3. more


## Usage/Examples

```typescript
interface User {
  name: string;
  email?: string; // Optional
}
const user1: User = {
  name: "Sujon",
};


interface Animal {
  name: string;
  sound(): void;
}

class Dog implements Animal {
  name = "Tommy";
  sound() {
    console.log("Woof");
  }
}

```


### Type Alias:

Type হলো flexible type system, যা Object ছাড়াও primitive, union, tuple, function type define করতে পারে।




### সুবিধা:
    1. Object ছাড়াও অন্য type define করা যায়।
    2. Complex type তৈরি করা সহজ।
    3. more


### Type যা করতে পারে না::
    1. Class implement করার ক্ষেত্রে OOP-friendly নয়
    2. একটি Type-কে দুই জায়গায় split করে extend করা যায় না
    3. more


## Usage/Examples

```typescript
// Primitive Types
let username: string = "Sujon";

// Object Type
type User = {1
  id: number;
  name: string;
  isActive: boolean;
};

const user: User = { id: 1, name: "Sujon", isActive: true };

// Union Type

type Status = "success" | "error" | "loading";
let currentStatus: Status = "success";

// Array Type

let numbers: number[] = [1, 2, 3];
let users: User[] = [{ id: 1, name: "Sujon", isActive: true }];



```

### Provide an example of using union and intersection types in TypeScript.

### Union Type (|)

Union type মানে হলো একাধিক টাইপের মধ্যে যেকোনো একটি ব্যবহার করা যাবে। সিম্বল: |



## Examples

```typescript
function printId(id: string | number) {
  console.log("ID:", id);
}

printId(123);       // Output: ID: 123
printId("abc123");  // Output: ID: abc123


```




## Intersection Type (&)
Intersection type মানে হলো দুই বা তার বেশি টাইপ একসাথে combine করা, সব property থাকতে হবে।

## Examples

```typescript
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

let staffMember: Staff = {
  name: "Sujon",
  employeeId: 101
};



```


