fetch("http://localhost:3000/users/7", {
    method: "DELETE", 
}).then(res => console.log(res.status, res.statusText)).catch(res => console.log(res.statusText));