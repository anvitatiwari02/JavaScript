var friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};

var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Steve");



var friends=new Object()
friends.name="sgfdhd";
friends.age=23;
friends.bill={};
friends.steve={};
 friends.bill=new Object();
 friends.bill.firstName="Bill";
  friends.bill.lastName="Gates";
  friends.bill.number=234576677876;
 friends.steve=new Object();
  friends.steve.firstName="Steve";
 friends.steve.lastName="Gates";
  friends.steve.number=2345111677876;




var friends = {
bill: {
firstName: "Bill",
lastName: "Clinton",
number: "1234 - 78894",
address: ["71 apple road", "MacIntosh Way"]
},
steve: {
firstName: "Steve",
lastName: "Worland",
number: "555-787-990",
address: ["71 AWE Way", "Lane Way"]
}
};
var list=function(friends)
{
    for(var firstName in friends)
    {
        console.log(firstName);
    }
}
var search = function(name) {
    for(var key in friends) {
        if(friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
};






