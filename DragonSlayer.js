var slaying = true;
// A bit of new math magic to calculate the odds
// of hitting the dragon. We'll cover this soon!
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;
    
    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}

var slaying=true;
var youHit=Math.floor(Math.random() * 2);
var damageThisRoun=Math.floor(Math.random()*5 + 1);
var totalDamage=0;



var slaying=true;
var youHit=Math.floor(Math.random() * 2);
var damageThisRoun=Math.floor(Math.random()*5 + 1);
var totalDamage=0;
while(slaying)
{
    console.log("gsdfvaghjafsd");
    slaying=false;
}



var slaying=true;
var youHit=Math.floor(Math.random() * 2);
var damageThisRoun=Math.floor(Math.random()*5 + 1);
var totalDamage=0;
while(slaying)
{
    console.log("gsdfvaghjafsd");
    slaying=false;
    if(youHit===1)
    {
        console.log("congratulations....you hit the dragon ");
    }
    else
    {
        console.log(" the console saying that the dragon defeated you ");
    }
        
}



var slaying=true;
var youHit=Math.floor(Math.random() * 2);
var damageThisRound=Math.floor(Math.random()*5 + 1);
var totalDamage=0;
while(slaying)
{
    console.log("gsdfvaghjafsd");
    slaying=false;
    if(youHit===1)
    {
        console.log("congratulations....you hit the dragon ");
        totalDamage += damageThisRound;
        if(totalDamage>=4)
        {
            console.log("that the player slew the dragon");
            slaying=false;
        }
        else
        {
            console.log("youHit should be assigned a new random 1 or 0");
        }
            
    }
    else
    {
        console.log(" the console saying that the dragon defeated you ");
    }
        
}




