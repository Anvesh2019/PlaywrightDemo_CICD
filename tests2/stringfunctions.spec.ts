import {test,expect} from '@playwright/test'
test('Index OF',async()=>{

let city:string="Hyderabad";
console.log(city.indexOf('y'));  //y position
console.log(city.charAt(4)); //5th char
console.log(city.substring(1,5)); //2-6 chars  yder
console.log(city.replace('y','a')); //Replace y with a

let str1="I love hyderabad";
let arrWords:string[]=str1.split(' ');
console.log("Length is:" + arrWords.length);
console.log(str1.toLocaleLowerCase());
});

test('Reverse a string, check each char displayed howmany times',async()=>{

let city:string="Hyderabad";
let arrChars:string[]=city.split('');
console.log("Length is:" + arrChars.length);
let strRev:string="";
for(let i:number=arrChars.length-1;i>=0;i--)
{
    strRev=strRev+arrChars[i];
  
}
console.log(strRev);
let count:number=0;
for(let i:number=0;i<arrChars.length;i++)
{
    count=0;  
    for(let j:number=0;j<arrChars.length;j++)
    {
        if(arrChars[i]==arrChars[j])
        {
            count=count+1;
        }
    }
 console.log(arrChars[i] + " displayed :" + count + " times");
}

});