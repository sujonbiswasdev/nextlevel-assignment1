
### What are some differences between interfaces and types in TypeScript?

###### TypeScript-এ interface এবং type দুইটি ব্যবহার করা হয় ডাটা structure বা টাইপ define করতে, কিন্তু তাদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।


### ইন্টারফেস :

ইন্টারফেস আমাদের টাইপস্ক্রিপ্ট-এর স্ট্রাকচার তৈরি করে দেয়। এটি নির্ধারণ করে দেয় কোন কোন প্রোপার্টি বা মেথড থাকবে এবং তাদের টাইপ কি হবে।

এটি কম্পাইল-টাইম সেফটি দেয়, অর্থাৎ ভুল প্রপার্টি বা টাইপ ব্যবহার করলে কোড চলার আগে থেকেই এরর দেখায়

### কি কি করা যায়:

- অবজেক্ট-এর ক্ষেত্রে ব্যবহার করা যায়।
- ফাংশনের প্যারামিটার টাইপ দিতে ব্যবহার করা যায়।
- ইমপ্লিমেন্ট হিসেবে ব্যবহার করা যায়।
- এক্সটেন্ড হিসেবে ব্যবহার করা যায়।



### কি কি করা যায় না:

- চাইলে ডাইরেক্ট ভ্যালু দেওয়া যায় না।
- প্রিমিটিভ টাইপ বা ইউনিয়ন টাইপ দেওয়া যায় না।





## উদাহরণ

```typescript

interface Person {
  name: string;
  age?: number;
}

// ভুল - Interface itself মান assign করতে পারবে না
// let p: Person = Person; // Error 


// ঠিক উপায়: Interface type দিয়ে object declare করতে হয়
let sujon: Person = { name: "Sujon" };
console.log(sujon.name); // Output: Sujon


interface Animal {
  name: string;
  makeSound(): void; // শুধু signature
}


// ঠিক উপায়: class implement করে logic দিতে হবে
class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound() {
    console.log("Woof!");
  }
}

const dog = new Dog("Buddy");
dog.makeSound(); // Output: Woof!


interface Person {
  name: string;
  email?: string; // Optional
}

interface Employee extends Person {
  employeeId: number;
}

const emp: Employee = {
  name: "Sujon",
  employeeId: 101
};

```




### টাইপ অ্যালিয়াস

টাইপ হলো ফ্লেক্সিবল টাইপ সিস্টেম, যা অবজেক্ট ছাড়া প্রিমিটিভ, ইউনিয়ন, টাপল, ফাংশন টাইপও ডিফাইন করতে পারে।

টাইপ দিয়ে যেই স্ট্রাকচার তৈরি করবো, সেটা মাস্ট ফলো করতে হবে।
তবে চাইলে কোনো প্রপার্টি অপশনাল করতে পারবে, যাতে যেটা দরকার নেই সেটা না দিলে কোড ঠিকভাবে চলবে।





### কি কি করা যায়:

- আমরা প্রিমিটিভ টাইপ দিতে পারবো
- ইউনিয়ন টাইপ দিতে পারবো
- ইন্টারসেকশন টাইপ দিতে পারবো
- অবজেক্ট টাইপ দিতে পারবো
- ফাংশন টাইপ দিতে পারবো
- জেনারিক টাইপ দিতে পারবো
- ইত্যাদি



### কি কি করা যায় না:

- আমরা চাইলে ক্লাস ইমপ্লিমেন্ট করতে পারবো না
- ডাইরেক্ট ভ্যালু আসাইন করতে পারবো না
- এক্সটেন্ড করতে পারবো না





## উদাহরণ

```typescript
type ID = number | string;
let userId: ID;
userId = "A123"; 
// userId = true;  Error, boolean assign করা যাবে না

type Person = {
  name: string;
  email?: string; // Optional property
};

let sujon: Person = { name: "Sujon"};
let rahim: Person = { name: "Rahim", email: "rahim@example.com" };


type GreetFunction = (name: string) => string;

const greet: GreetFunction = (name) => {
  return `Hello, ${name}!`;
};

console.log(greet("Sujon")); // Output: Hello, Sujon!


```


### What is the use of the keyof keyword in TypeScript? Provide an example.

### কি-অফ (keyof)

টাইপস্ক্রিপ্ট কি-অফ (keyof) হলো একটি টাইপ অপারেটর, যেটি কোনো অবজেক্ট বা ইন্টারফেসের সকল প্রপার্টির নামকে ইউনিয়ন টাইপ হিসেবে বের করে আনে।

এবং সেগুলো আমরা টাইপ হিসেবে ব্যবহার করতে পারি। কোডকে আরও শক্তিশালী এবং টাইপ-সেফ করা যায়।

### এটি ব্যবহার করা হয়:

- টাইপের সাথে টাইপ-সেইফ কোড লিখতে।
- ম্যাপিড টাইপ তৈরি করতে ব্যবহার করা হয়।
- ডায়নামিকভাবে প্রপার্টিতে অ্যাক্সেস করতে।
- ইত্যাদি

## উদাহরণ

```typescript
 

interface Person {
    name: string;
    gender: string;
}

type ReadonlyPerson = {
    readonly [K in keyof Person]: Person[K];
}

const person: ReadonlyPerson = {
    name: "sujon",
    gender: "male",
};

console.log(person.name); // "sujon"
console.log(person.gender); // "male"



type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 222, // key: value
  name: "sujon",
  address: {
    city: "sylhet",
  },
};


const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const result1 = getPropertyFromObj(user, "id");
console.log(result1);



```




