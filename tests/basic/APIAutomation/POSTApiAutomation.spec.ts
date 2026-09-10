import {test,request,expect} from "@playwright/test";

test('verify POST api request for create booking id',async({request})=>{
    const url = "https://restful-booker.herokuapp.com/booking";
    const method = "POST";
    const headers = {
        accept:'application/json'
    }
    const Body ={
          "firstname" : "Raisa",
        "lastname" : "tashildar",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
        "additionalneeds" : "Breakfast"
    }

    console.log("===================Request ===============")
    console.log("url    :",url);
    console.log("method   :",method);
    console.log("headers   :",headers)
    console.log("Body       :",Body)

    const response = await request.get(url,{headers,data:Body});

    console.log("===================Response===============")
    console.log("status   :",response.status);
    console.log("body   :",await response.json());

    expect (response.ok()).toBeTruthy();
    const apibody = await response.json();
    expect (apibody.bookingid).not.toBeNull();
    //expect(apibody.firstname).toBe('Raisa');

})