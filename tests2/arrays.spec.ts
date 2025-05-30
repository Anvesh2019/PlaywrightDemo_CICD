import { test } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright'; 
test('string array',async()=>{
    let fruits: string[] = ['Apple', 'Orange', 'Banana'];
    console.log(fruits[0]);
    console.log(fruits.length);
    console.log(fruits[5]);
    
});

test('integer array',async()=>{
    let evenNums: number[] = [25,46,62,87,101,85,24,100];
    //evenNums.push(500);
    //console.log(evenNums[0]);
   // console.log("length is:" + evenNums.length);
    //evenNums.sort();
   // console.log("smallest:" + evenNums[7]);
    evenNums.sort();
    console.log(evenNums[1]);
});

test('sort array',async()=>{
const numbers: number[] = [34, 7, 23, 32, 5, 62];
// Sort in ascending order
const ascending = [...numbers].sort((a, b) => a - b);
//console.log("Ascending:", ascending); // Output: [5, 7, 23, 32, 34, 62]
console.log(ascending[2]);
});

test('check occurances of char',async()=>{
const str1: string = "anand babu";
let count:any=0;
let myMap : Map<string, string>=new Map<string,string>();
var predefinedDecHash = new Map();
for(let i:any =0;i<str1.length;i++)
{
    count=0;
    for(let j:any =0;j<str1.length;j++)
    {
       if(str1[i]==str1[j])
       {
         count=count+1;
       }
       
    }
   
   myMap.set(str1[i],count);
   
}

for (let [key, value] of myMap.entries()) { 
    console.log(key, value);
}
   
});