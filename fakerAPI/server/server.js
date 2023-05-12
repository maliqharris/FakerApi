//  import them dependencies
const express = require("express")
const app = express()

const { faker } = require('@faker-js/faker');
// construct the  class
const createUser = () => {
    const UserObject = {
   
        password: faker.internet.password(),
        email:  faker.internet.email(),
        phoneNumber:  faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        id:  faker.database.mongodbObjectId()
    };
    return UserObject;
};

const createCompany = () =>{
    const CompanyObject ={
    
        id: faker.database.mongodbObjectId(),
        name: faker.company.bs(),
        address: faker.address.streetAddress()
    };
    return CompanyObject
};

const createBoth = () =>{
    const Object ={
    
        companyId: faker.database.mongodbObjectId(),
        companyName: faker.company.bs(),
        companyAddress: faker.address.streetAddress(),
        password: faker.internet.password(),
        email:  faker.internet.email(),
        phoneNumber:  faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        userId:  faker.database.mongodbObjectId()

    };
    return Object
};



// THE ADRESS PAGE WAS DOWN, I COULD NOT LOOK AT DOCUMENTATION!!!!!!




// configure express

app.use( express.json() ); //reconize JSON object
app.use( express.urlencoded({ extended: true }));

// define routes and logic
app.get ("/api/testing", (reg, res)=>{
    res.json ( {message: "Hello World"})
})   

// Get new User
app.post("/api/users/new", (req,res) =>{
    const newUser = createUser();
    res.json(newUser)

})

// Get new Company!
app.post("/api/companies/new", (req,res) =>{
    const newCompany = createCompany();
    res.json(newCompany)

})

// Get Both
app.post("/api/user/company", (req,res) =>{

    const newBoth = createBoth();
   
    res.json(newBoth)
 
    

})





// listen on port!
app.listen(8002, ()=>console.log( `Listening on port: 8002`))