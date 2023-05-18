const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href ="https://developer.mozilla.org";

//let's start by grabbing a reference to our <section> element — add the following code at the bottom of your existing script
const sect = document.querySelector("section");

//Now let's create a new paragraph using Document.createElement() and give it some text content in the same way as before:
const para = document.createElement("p");
para.textContent = "we hope you enjoyed the ride.";

//You can now append the new paragraph at the end of the section using
sect.appendChild(para);

//Finally for this part, let's add a text node to the paragraph the link sits inside, to round off the sentence nicely. 
//First we will create the text node using Document.createTextNode():
const text = document.createTextNode(" - the premier source for web development knowledge."); 

//Now we'll grab a reference to the paragraph the link is inside, and append the text node to it:
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

sect.appendChild(linkPara);

para.setAttribute("class", "highlight");