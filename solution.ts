
type formatType = string | number | boolean
function formatValue(arg:formatType):formatType{
    if(typeof arg ==='string'){
        return arg.toUpperCase();
    }else if(typeof arg==='number'){
        return arg*10;
    }else if(typeof arg ==='boolean'){
        return !arg;
    }else{
        return `Please enter valid text`;
    }
}




type Tlength = string | any[];
function getLength(arg:Tlength):number {
    if(typeof arg==='string'){
        return arg.length;
    }else if(Array.isArray(arg)){
        return arg.length;
    }
    return 0;
}





class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
    
}






type TBook=Array<
{
    title:string;
    rating:number;
}
>


function filterByRating(arr:TBook):TBook{
   const result =arr.filter((item)=>item.rating>=4)
   return result;
}





type TActiveUser = Array<
{
    id:number;
    name:string;
    email:string;
    isActive:boolean;
}
>



const filterActiveUsers=(user:TActiveUser):TActiveUser=>{
    const isActive = user.filter((item)=>item.isActive ==true);
    return isActive
}





interface Book{
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;

}

const printBookDetails=(arg:Book)=>{
    console.log(`Title: ${arg.title}, Author: ${arg.author}, Published: ${arg.publishedYear}, Available: ${arg.isAvailable?"Yes":"No"}`);
}





type getUniqueType = number[] | string[] 

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






type Tproducts = Array<
{
    name:string;
    price:number;
    quantity:number;
    discount?:number;
}
>

const calculateTotalPrice=(arg:Tproducts):number=>{

    if(arg.length===0) return 0;
    const totalprice = arg.reduce((sum,curent)=>{

         const sumdata=curent.price*curent.quantity
         const discount = curent.discount?(sumdata*curent.discount)/100:0
        return sum+(sumdata-discount)

    },0)
    return totalprice
}

