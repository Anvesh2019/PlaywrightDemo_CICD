import { test, expect } from '@playwright/test';

test('learn map',async()=>{
    const userAge: Map<string, number> = new Map();
    userAge.set("Anand", 45);
    userAge.set("Anvesh", 9);
    userAge.set("Asha",8);
    userAge.set("Anand",30); //duplicates allowed
    console.log(userAge.get("Anand")); // 45
    userAge.clear();
    console.log(userAge.size); //0
});
//Learn Set
test('Learn set',async()=>
{
    const uniqueNumbers: Set<number> = new Set([1, 2, 3, 1]); // 1 appears only once
    uniqueNumbers.add(4);
    uniqueNumbers.has(2); // true
    console.log(uniqueNumbers.has(1));
    console.log(uniqueNumbers.size);
});
//Learn Type
test('Learn Type',async()=>{
    type Person = {
  name: string;
  age: number;
};

const user: Person = {
  name: "Bob",
  age: 30
};
console.log(user.age);
});

