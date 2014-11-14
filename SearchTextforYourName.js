/*jshint multistr:true */

text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";

var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "E") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}


/*jshint multistr:true */
var text ="ahsdff";
var myName ="anvita";
var hits=[];


/*jshint multistr:true */
var text ="ahsdff";
var myName ="anvita";
var hits=[];
for(var i=0;i<text.length;i++)
{
}


/*jshint multistr:true */
var text ="ahsdff";
var myName ="anvita";
var hits=[];
for(var i=0;i<text.length;i++)
{
    if(text[i]=== myName[i])
    {
    }
}


/*jshint multistr:true */
var text ="ahsdff";
var myName ="anvita";
var hits=[];
for(var i=0;i<text.length;i++)
{
    if(text[i]=== myName[i])
    {
        for(var j=i;j<=i+myName.length;j++)
       {
           hits.push(text[j]);
       }
    }
}


/*jshint multistr:true */
var text ="ahsdff";
var myName ="anvita";
var hits=[];
for(var i=0;i<text.length;i++)
{
    if(text[i]=== myName[i])
    {
        for(var j=i;j<=myName.length;j++)
       {
            hits.push(text[j]);
       }
    }
       
       if(hits.length===0)
{
     console.log("Your name wasn't found!");
} 
else
{
    console.log ("the hits array to the console.");
}
 
}
