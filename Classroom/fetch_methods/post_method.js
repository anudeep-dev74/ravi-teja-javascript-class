fetch("http://localhost:3000/users", {
    method: "POST", 
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Narendra"
    })
}).then(res => console.log(res.status, res.statusText));