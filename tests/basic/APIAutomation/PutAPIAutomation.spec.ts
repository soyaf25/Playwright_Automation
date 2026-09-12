import { test, expect, request } from "@playwright/test";

let token : string;

test.beforeEach(async ({request}) =>{
    const url = "https://restful-booker.herokuapp.com/auth";
    const method = "POST";
    const headers = {
        Accept : 'application/json'
    };
    const body = {
        username : "admin",
        password  : "password123"
    }

    console.log('=======================Request=========================');
    console.log('Method                     : ', method);
    console.log('Url                        : ', url);
    console.log('Headers                    : ', headers);
    console.log('Body                       : ', JSON.stringify(body));

    const respose = await request.post(url, {
        headers,
        data:body
    });
    console.log('=======================Response=========================');
    console.log('Status                     : ', respose.status());
    console.log('Body                       : ', await respose.json());

    expect(respose.ok()).toBeTruthy();
    const apiRespose = await respose.json();
    token = apiRespose.token;
})


test(`Verify put API Automation for create booking`, async({request}) =>{
    const url = 'https://restful-booker.herokuapp.com/booking/1';
    const method = 'PUT';
    const headers = {
        Accept : 'application/json',
        'Cookie' : `token=${token}`,
        'Content-Type' : `application/json`
    };
    const body = {     
        firstname : "Mohini",
        lastname : "Dole",
        totalprice : 111,
        depositpaid : true,
        bookingdates : {
            checkin : "2018-01-01",
            checkout : "2019-01-01"
        },
        additionalneeds : "Update data"
    }

    console.log('=======================Request=========================');
    console.log('Method                     : ', method);
    console.log('Url                        : ', url);
    console.log('Headers                    : ', headers);
    console.log('Body                       : ', JSON.stringify(body));

    const respose = await request.put(url, {
        headers,
        data:body,
    });

    console.log('=======================Response=========================');
    console.log('Status                     : ', respose.status());
    console.log('Body                       : ', await respose.json());

    expect(respose.ok()).toBeTruthy();
    const apiResponse = await respose.json();
    expect(apiResponse.firstname).toBe('Mohini');
    expect(apiResponse.lastname).toBe('Dole');
})