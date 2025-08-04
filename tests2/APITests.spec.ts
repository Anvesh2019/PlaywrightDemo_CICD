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
        
});