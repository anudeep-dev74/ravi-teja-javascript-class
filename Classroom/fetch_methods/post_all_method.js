let users = [
    {name: "Anudeep"}, 
    {name: "Narendra"}, 
    {name: "Mahendra"},
    {name: "Kowshik"},
    {name: "Sandeep"}
]

for(let i = 0; i < users.length; i++){
    fetch("http://localhost:3000/users", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json" 
        }, 
        body: JSON.stringify(users[i])
    })
    .then(res => res.json())
    .then(data => {
        console.log("Created", data)
    }).catch(error => {
        console.log("Error", error)
    })
}