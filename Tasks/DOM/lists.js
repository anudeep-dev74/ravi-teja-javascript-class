/*
    Create a List and Append to the Body
    Create an unordered list (<ul>) with five list items (<li>), each containing unique text. Append the <ul> to the <body>.

    direct approch 
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
*/

let ul_ele = document.createElement("ul");
let list_li = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
for(let i = 0; i < list_li.length; i++){
    let li_ele = document.createElement("li");
    li_ele.innerText = list_li[i];
    ul_ele.append(li_ele);
}
document.body.append(ul_ele);