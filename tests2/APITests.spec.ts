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
    expect(await response.json()).toHaveProperty('message','Pet not found');
    expect(await response.json()).toHaveProperty('code', 1);
    //expect(await response.json()).toMatch('error');
    
});
//Delete non existing PET
test('Delete non existing Pet', async ({ request }) => {
  const response = await request.delete('https://petstore.swagger.io/v2/pet/786');
    expect(await response.statusText()).toBe("Not Found");
    expect(await response.status()).toBe(404);
    
});

//Delete existing PET
test('Delete existing Pet', async ({ request }) => {
  //precondition: petID: 12345669 exists
  const response = await request.delete('https://petstore.swagger.io/v2/pet/12345669');
    //expect(await response.statusText()).toBe("");
    expect(await response.status()).toBe(200);
    
});