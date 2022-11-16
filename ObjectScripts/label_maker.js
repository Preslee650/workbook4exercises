//objects
let myInfo = {
    firstName: 'Michael',
    address: '3945 Branson Drive',
    city: 'San Mateo',
    state: 'CA',
    zip: '94403'
};

function printContact(contact) { //parameter is storing myInfo variable
    let printContact = `
    ${contact.firstName}
    ${contact.address} 
    ${contact.city} 
    ${contact.state} 
    ${contact.zip}`;
    console.log(printContact) //displaying my data
}

printContact(myInfo); //invoking function