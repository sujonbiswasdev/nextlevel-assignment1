
### What are some differences between interfaces and types in TypeScript?

###### TypeScript-এ interface এবং type দুইটি ব্যবহার করা হয় ডাটা structure বা টাইপ define করতে, কিন্তু তাদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

### interface
Interface হলো একটি blueprint বা নকশা যা বলে দেয় object বা class-এর মধ্যে কি কি property এবং method থাকবে। মূলত OOP (Object Oriented Programming) friendly।

Compile-time safety দেয়, অর্থাৎ ভুল property বা type ব্যবহার করলে কোড চলার আগেই error দেখায়।

### উদ্দেশ্য এবং ব্যবহার:
Object বা Class-এর structure enforce করা।

Class implement করার জন্য।

বড় প্রজেক্টে consistency বজায় রাখা।

### সুবিধা:

Compile-time safety → ভুল property বা type ব্যবহারে error।

Class design clean ও structured।






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


### Type:

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



### What is the use of the keyof keyword in TypeScript? Provide an example.


## keyof

keyof হলো TypeScript-এর type operator। এটি object type-এর সব property name বের করে। Output হয় union type, অর্থাৎ সব property name একসাথে।




### Examples

```typescript
interface User {
  name: string;
  age: number;
  email: string;
}

type UserKeys = keyof User;
// Result: "name" | "age" | "email"

```


### কেন ব্যবহার করা হয়?
- Object-এর কোন property valid কিনা compile-time check করতে।
- Type-safe কোড লেখা।
- more
 



### Explain the difference between any, unknown, and never types in TypeScript.

## any types

any হলো সবচেয়ে flexible টাইপ। এর মানে এই যে, এই টাইপের ভেরিয়েবলে যেকোনো ধরনের মান রাখা যায়। any ব্যবহার করলে TypeScript টাইপ চেকিং বন্ধ করে দেয়।





### Examples

```typescript
let data: any;
data = 5;
data = "Hello";
data = { name: "Sujon" };

```


## unknown types

unknown any এর মতোই, এটি যেকোনো ধরনের মান রাখতে পারে, কিন্তু এর উপর operation করার আগে টাইপ চেক বাধ্যতামূলক।

### মূল বিষয়গুলো
- any থেকে নিরাপদ।
- ব্যবহারের আগে টাইপ চেক বাধ্যতামূলক।

### Examples

```typescript
let value: unknown;

value = 10;
value = "Hello";

let str: string;

// str = value; // Error: unknown টাইপের মান সরাসরি string এ assign করা যাবে না

if (typeof value === "string") {
  str = value; // টাইপ নিরাপদভাবে assign করা হলো
}

```
### never types

never হলো এমন একটি টাইপ যা কখনো মান ধরে না। সাধারণত function এর জন্য ব্যবহার করা হয় যা কখনো return করে না


### Examples

```typescript
function throwError(message: string): never {
  throw new Error(message);
}

```

### What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

## TypeScript Enums


enum হলো TypeScript-এর একটি special type, যা নির্দিষ্ট নামকৃত মানগুলো (named constants) সংরক্ষণ করে। সহজভাবে বলতে গেলে, একই ধরনের মানগুলোকে একটি গ্রুপে রাখার উপায়।


## Examples

```typescript

// numeric enums
enum Status {
  Pending,     // 0
  InProgress,  // 1
  Completed    // 2
}

let taskStatus: Status = Status.InProgress;
console.log(taskStatus); // 1

// string enums

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

let move: Direction = Direction.Left;
console.log(move); // "LEFT"


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


