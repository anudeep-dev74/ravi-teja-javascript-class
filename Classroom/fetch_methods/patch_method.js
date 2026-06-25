fetch("http://localhost:3000/users/8", {
    method: "PATCH", 
    headers: {
        "Content-Type": "application/json"
    }, 
    body: JSON.stringify({
        name: "Sai"
    })
}).then(res => console.log(res.status, res.statusText)).catch(res => console.log(res.statusText));