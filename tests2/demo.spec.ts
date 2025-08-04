import { test, expect,Page, Browser, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright'; 

test('operator',async()=>{
    let x:number=30;
    let y:number= 40;
    console.log(x==y);
});

test('Learn type of',async()=>{
    const age:number=25;
    if(age>25)
    {
        let city: string ="Hyderabad";
        console.log("stud is major");
    }
    console.log(typeof age);
   // console.log(typeof city); //undefined coz of scope
   // expect.soft(expect(age).toContain(25));
    console.log("after soft assertion");
    printName();
    console.log("anands age is" + GetAge());
    let myStates:string[]=GetStates();
    console.log(myStates[0]);
});

function printName():void
{
    console.log("my name is anand");
}
function GetAge():number
{
    return 25;
}
function GetStates(): string[]
{
   let states:string[]=["AP","UP"];
   return states;

}