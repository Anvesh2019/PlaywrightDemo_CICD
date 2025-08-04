import { test, expect } from '@playwright/test';
test('Get Available Pets', async ({ request }) => {
  
  const response = await request.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available');
  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toContainEqual(expect.objectContaining({
    name: 'fish',
    }));
    console.log("Status is:" + await response.status().toString());
    console.log("status text is:" + await response.statusText().toString());
    console.log("response body:" + await response.body().toString());
   // expect((await response.json()).contain("fish"));
    expect(response.status).toBe('available');
        
});
test('Get Pet By Available PetID', async ({ request }) => {
  const petID:number=1234;
  const response = await request.get('https://petstore.swagger.io/v2/pet/1234');
  expect(response.ok()).toBeTruthy();
  //expect(await response.json()).toContainEqual(expect.objectContaining({name: 'dog'}));
    console.log("Status is:" + await response.status().toString());
    console.log("status text is:" + await response.statusText().toString());
    console.log("response body:" + await response.body().toString());
   // expect((await response.json()).contain("fish"));
    expect(response.status).toBe('sold');
        
});
test('Get Pet By NOT Available PetID', async ({ request }) => {
  const petID:number=1234;
  const response = await request.get('https://petstore.swagger.io/v2/pet/786');
 // expect(await response.status().toString());
    console.log("Status is:" + await response.status().toString());
    console.log("status text is:" + await response.statusText().toString());
    console.log("response body:" + await response.body().toString());
    expect(await response.statusText()).toBe("Not Found");
    expect(await response.status()).toBe(404);
        
});