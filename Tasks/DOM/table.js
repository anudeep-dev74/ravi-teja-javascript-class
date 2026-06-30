/*
     Generate a Table Row and Append to the Body
    Create a <table> element with a single row (<tr>) and three cells (<td>), each containing some text. Append the <table> to the <body>.

*/

let table = document.createElement("table");
table.style.border = "1px solid black"
table.cellPadding = "10"
let tr = document.createElement("tr");
let td_1 = document.createElement("td");
td_1.innerText = "S.No"
td_1.style.border = "1px solid black"
let td_2 = document.createElement("td");
td_2.innerText = "Student Name"
td_2.style.border = "1px solid black"
let td_3 = document.createElement("td");
td_3.innerText = "Student Class"
td_3.style.border = "1px solid black"
tr.append(td_1)
tr.append(td_2)
tr.append(td_3)
table.append(tr)
document.body.append(table)