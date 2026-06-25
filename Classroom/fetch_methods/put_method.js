fetch("http://localhost:3000/users/", {
    method: "PUT", 
    headers: {
        "Content-Type": "application/json"
    }, 
    body: JSON.stringify({
        id: 4,
        name: "Kushal"
    })
}).then(res => console.log(res.status, res.statusText));