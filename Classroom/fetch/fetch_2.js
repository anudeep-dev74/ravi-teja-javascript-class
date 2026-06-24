const URL="http://localhost:3000/students";
let options={
    "method":"POST",
    "headers":{
        "content-Type":"application/json"
    },
    "body":JSON.stringify({
        "id": "3",
        "name":"Sandeep",
        "course":"Sql"
    })
}

fetch(URL,options).then((res)=>{
    console.log(res.status,res.statusText)
})