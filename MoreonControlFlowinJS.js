var isEven = function(number) {
  // Your code goes here!
  if(number%2==0)
  {
      return true;
  }
  else
  {
      return false;
  }
  
  
}
isEven(4);




 var isEven = function(number) {
if (isNaN (number)) {
return "The input was not a number!";
} else if (number % 2 === 0) {
return true;
} else if (isNaN (number) === true) {
return "Your input isn't a number!";
}else {
return false;
}
};
 



// Write your loop below!
for(var i=1;i<=10;i++)
{
    console.log(i);
}


var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}


var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
  //Add your case here!
  case 'yellow':
    console.log("That's one of  my favorite color, too!");
    break;
  
  default:
    console.log("I don't think that's a primary color!");
}


var candy = prompt("What's your favorite candy?","Type your favorite candy here.");

switch(candy) {
  case 'licorice':
    console.log("Gross!");
    break;
  case 'gum':
    console.log("I like gum!");
    break;
  case 'beets':
    console.log("...is that even a candy?");
    break;
  // Add your code here!
  default:
  console.log("cghfcfhkjk");
  
  
  
}


var answer = prompt("Add your question here!");

switch(answer) {
  case 'yes':
    console.log("u r right");
    break;
    case 'no':
    console.log("u r  not right");
    break;
    default:
    console.log("djsfhkjsdf");
    
  // Add your code here!
  
}


// Write your code below!
var fruit=prompt("which fruit u want 2 eat");
switch(fruit)
{
    case'apple':
        console.log("dsjfhkjsdf");
        break;
        case'mango':
        console.log("dsjfdhbj");
        break;
        case'orange':
        console.log("dsj");
        break;
        default:
        console.log("hsdhfd");
}




// Write your code below!
var fruit=prompt("which fruit u want 2 eat");
switch(fruit)
{
    case'apple':
        console.log("dsjfhkjsdf");
        break;
        case'mango':
        console.log("dsjfdhbj");
        break;
        case'orange':
        console.log("dsj");
        break;
        default:
        console.log("hsdhfd");
}




// Complete lines 3 and 4!

var iLoveJavaScript =true ;
var iLoveLearning = true;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  // if NOT iLoveJavaScript OR iLoveLearning:
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}


// Declare your variables here!
var hungry=true;
var foodHere=true;


var eat = function() 
{
  // Add your if/else statement here!
  if(hungry && foodHere===true)
  {
      return true;
  }
  else
  {
      return false;
  }
  
}


// Declare your variables here!
var tired=true;
var bored=false;


var nap = function() {
  // Add your if/else statement here!
  if(tried || bored===true)
  {
      return true;
  }
  else
  {
      return false;
  }
  
};


// Declare your variables here!
var programming=false;


var happy = function() {
  // Add your if/else statement here!
  if(programming !=true)
  {
      return true;
  }
  else
  {
      return false;
  }
  
}


