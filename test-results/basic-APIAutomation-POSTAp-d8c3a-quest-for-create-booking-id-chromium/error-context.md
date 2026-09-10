# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: basic\APIAutomation\POSTApiAutomation.spec.ts >> verify POST api request for create booking id
- Location: tests\basic\APIAutomation\POSTApiAutomation.spec.ts:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Raisa"
Received: undefined
```

# Test source

```ts
  1  | import {test,request,expect} from "@playwright/test";
  2  | 
  3  | test('verify POST api request for create booking id',async({request})=>{
  4  |     const url = "https://restful-booker.herokuapp.com/booking";
  5  |     const method = "POST";
  6  |     const headers = {
  7  |         accept:'application/json'
  8  |     }
  9  |     const Body ={
  10 |           "firstname" : "Raisa",
  11 |         "lastname" : "tashildar",
  12 |         "totalprice" : 111,
  13 |         "depositpaid" : true,
  14 |         "bookingdates" : {
  15 |         "checkin" : "2018-01-01",
  16 |         "checkout" : "2019-01-01"
  17 |     },
  18 |         "additionalneeds" : "Breakfast"
  19 |     }
  20 | 
  21 |     console.log("===================Request ===============")
  22 |     console.log("url    :",url);
  23 |     console.log("method   :",method);
  24 |     console.log("headers   :",headers)
  25 |     console.log("Body       :",Body)
  26 | 
  27 |     const response = await request.get(url,{headers,data:Body});
  28 | 
  29 |     console.log("===================Response===============")
  30 |     console.log("status   :",response.status);
  31 |     console.log("body   :",await response.json());
  32 | 
  33 |     expect (response.ok()).toBeTruthy();
  34 |     const apibody = await response.json();
  35 |     expect (apibody.bookingid).not.toBeNull();
> 36 |     expect(apibody.firstname).toBe('Raisa');
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  37 | 
  38 | })
```