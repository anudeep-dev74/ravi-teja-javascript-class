/*
    Create a List and Append to the Body
    Create an unordered list (<ul>) with five list items (<li>), each containing unique text. Append the <ul> to the <body>.
*/

let ul_ele = document.createElement("ul");
let li_ele_1 = document.createElement("li");
li_ele_1.innerText = "HTML"
let li_ele_2 = document.createElement("li");
li_ele_2.innerText = "CSS"
let li_ele_3 = document.createElement("li");
li_ele_3.innerText = "JavaScript"
let li_ele_4 = document.createElement("li");
li_ele_4.innerText = "TypeScript"
let li_ele_5 = document.createElement("li");
li_ele_5.innerText = "react"
ul_ele.append(li_ele_1)
ul_ele.append(li_ele_2)
ul_ele.append(li_ele_3)
ul_ele.append(li_ele_4)
ul_ele.append(li_ele_5)
document.body.append(ul_ele);