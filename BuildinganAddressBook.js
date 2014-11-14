var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-777",
    email: "bob.jones@example.com"
};

console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.email);


var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};
var mary = {
    firstName: "Mary ",
    lastName: "Johnson",
    phoneNumber: "(650) 888 - 8888",
    email: "mary.johnson@example.com"
};
var contacts=[bob,mary];
{
    console.log(mary.phoneNumber);
}




var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

// printPerson added here
var printPerson =function(person)
{
    console.log(person.firstName + " " + person.lastName);
}
var contacts = [bob,mary];
printPerson(bob);
printPerson(mary);





var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}
function list() {
var contactsLength = contacts.length;
for(var i = 0; i < contacts.length; i++) {
printPerson(contacts[i]);
}
};





var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/

function search (lastName) 
{
	var contactsLength1 = contacts.length;
	for (var i = 0; i < contactsLength1; i++) 
	{
	if(contacts[i].lastName===lastName)
	{
	    printPerson(contacts[i]);
	}
	}
}search("Jones");







var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/

function search (lastName) 
{
	var contactsLength1 = contacts.length;
	for (var i = 0; i < contactsLength1; i++) 
	{
	if(contacts[i].lastName===lastName)
	{
	    printPerson(contacts[i]);
	}
	}
}search("Jones");
 function add(firstName,lastName,email,phoneNumber)
    {
        contacts[contacts.length] = 
        {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
        }
    }

add("Alex","Besciu","alexb@mail.com","234-223");
list();


