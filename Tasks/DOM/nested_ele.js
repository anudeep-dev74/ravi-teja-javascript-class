/*
    Build a Nested Structure and Append to the Body
    Create a <div> containing a <h1> heading and a <p> paragraph, both with distinct text. Append the <div> to the <body>.

*/

let div_ele = document.createElement("div");
let h1_ele = document.createElement("h1");
let p_ele = document.createElement("p");

h1_ele.innerText = "This is Heading"
p_ele.innerText = "This is Paragraph"

div_ele.append(h1_ele)
div_ele.append(p_ele)

document.body.append(div_ele)