import {test,request,expect} from "@playwright/test";

// test('verify Get api request all booking id',async({request})=>{
//     const url = "https://restful-booker.herokuapp.com/booking";
//     const method = "GET";
//     const headers = {
//         accept:'application/json'
//     }

//     console.log("===================Request ===============")
//     console.log("url    :",url);
//     console.log("method   :",method);
//     console.log("headers   :",headers)

//     const response = await request.get(url,{headers});

//     console.log("===================Response===============")
//     console.log("status   :",response.status);
//     console.log("body   :",await response.json());

//     expect (response.ok()).toBeTruthy();
//     const body = await response.json();
//     expect(body.firstname).not.toBeNull();

// })

// test('verify Get api request for specific booking id',async({request})=>{
//     const url = "https://restful-booker.herokuapp.com/booking/1";
//     const method = "GET";
//     const headers = {
//         accept:'application/json'
//     }

//     console.log("===================Request ===============")
//     console.log("url    :",url);
//     console.log("method   :",method);
//     console.log("headers   :",headers)

//     const response = await request.get(url,{headers});

//     console.log("===================Response===============")
//     console.log("status   :",response.status);
//     console.log("body   :",await response.json());

//     expect (response.ok()).toBeTruthy();
//     const body = await response.json();
//     expect(body.firstname).not.toBeNull();

// })

test('verify Get api request for query param',async({request})=>{
    const url = "https://reqres.in/api/users?page=2";
    const method = "GET";
    const headers = {
        accept:'application/json'
    }
    const params ={page:2};

    console.log("===================Request ===============")
    console.log("url    :",url);
    console.log("method   :",method);
    console.log("headers   :",headers)

    const response = await request.get(url,{headers,params});

    console.log("===================Response===============")
    console.log("status   :",response.status);
    console.log("body   :",await response.json());

    expect (response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body.page).toBe(2);

})