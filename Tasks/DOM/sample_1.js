/*
let data = ["Sandeep", "Anudeep", "Mahendra", "Yash"];
let div_ele = document.createElement("div");
for(i = 0; i < data.length; i++){
    let p_ele = document.createElement("p");
    p_ele.innerText = data[i];
    p_ele.setAttribute("name", "data[i]");
    div_ele.append(p_ele);
}
document.body.append(div_ele);
*/

let data = [
    {
        "id": 1,
        "name": "Sandeep",
    },
    {
        "id": 2,
        "name": "Anudeep",
    },{
        "id": 3,
        "name": "Mahendra",
    }, {
        "id": 4,
        "name": "Narendra",
    }
]
// foreach  div -> p -> name = sandeep
let div_ele = document.createElement("div");

data.forEach((item) => {
    let p_ele = document.createElement("p");
    p_ele.innerText = `Name is ${item.name}`;
    p_ele.setAttribute("name", item.name);
    div_ele.append(p_ele);
})
document.body.append(div_ele);