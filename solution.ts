
type formatType = string | number | boolean
function formatValue(arg:formatType):formatType{
    if(typeof arg ==='string'){
        return arg.toUpperCase();
    }else if(typeof arg==='number'){
        return arg*10;
    }else if(typeof arg ==='boolean'){
        return !arg;
    }else{
        return `Please enter valid text`
    }
}

console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));



type Tlength = string | any[]
function getLength(arg:Tlength):number {
    if(typeof arg==='string'){
        return arg.length
    }else if(Array.isArray(arg)){
        return arg.length
    }
    return 0
}
console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));




class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age
    }

    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
    
}

const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());
const person2 = new Person('Alice', 25);
console.log(person2.getDetails());




type TBook=Array<
{
    title:string;
    rating:number;
}
>

const books:TBook = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];
function filterByRating(arr:TBook):TBook{
   const result =arr.filter((item)=>item.rating>=4)
   return result
}

console.log(filterByRating(books));




type TActiveUser = Array<
{
    id:number;
    name:string;
    email:string;
    isActive:boolean;
}
>

const users:TActiveUser = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

const filterActiveUsers=(user:TActiveUser):TActiveUser=>{
    const isActive = user.filter((item)=>item.isActive ==true);
    return isActive
}
console.log(filterActiveUsers(users));





interface Book{
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;

}
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};
const printBookDetails=(arg:Book)=>{
    console.log(`Title: ${arg.title}, Author: ${arg.author}, Published: ${arg.publishedYear}, Available: ${arg.isAvailable?"Yes":"No"}`);
}
printBookDetails(myBook);





type getUniqueType = number[] | string[] 
const array1:number[] | string[] = [1, 2, 3, 4, 5];
const array2:number[] | string[] = [3, 4, 5, 6, 7];

function getUniqueValues(arr1:getUniqueType,arr2:getUniqueType):getUniqueType{
    let arr:any[]=[];
    for(let i= 0;i<arr1.length;i++){
        let found = false
        for(let j=0;j<arr.length;j++){
            if(arr[j]===arr1[i]){
                found = true
                continue;
            }
        }
    if(!found){
        arr.push(arr1[i])
    }
    }

    for(let i=0;i<arr2.length;i++){
        let found=false;
        for(let j=0;j<arr.length;j++){
            if(arr[j]===arr2[i]){
                found=true;
                continue;
            }
        }
        if(!found){
            arr.push(arr2[i])
        }
    }
    return arr
}
console.log(getUniqueValues(array1, array2));





type Tproducts = Array<
{
    name:string;
    price:number;
    quantity:number;
    discount?:number;
}
>

const products:Tproducts = [
  { name: 'Pen', price: 10, quantity: 2,discount:0 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];


const calculateTotalPrice=(arg:Tproducts):number=>{

    if(arg.length===0) return 0;
    const totalprice = arg.reduce((sum,curent)=>{

         const sumdata=curent.price*curent.quantity
         const discount = curent.discount?(sumdata*curent.discount)/100:0
        return sum+(sumdata-discount)

    },0)
    return totalprice
}
console.log(calculateTotalPrice(products));


