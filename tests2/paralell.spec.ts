import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';
import { Page } from 'playwright';

test.describe.configure({ mode: 'parallel' });
test('test case1',async()=>{
    console.log("i am test case1");
});
test('test case2',async()=>{
    console.log("i am test case2");
});
test('test case3',async()=>{
    console.log("i am test case3");
});
