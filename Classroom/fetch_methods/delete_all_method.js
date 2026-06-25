fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(users => {
        for(let i = 0; i < users.length; i++){
            fetch(`http://localhost:3000/users/${users[i].id}`, {
                method: "DELETE"
            })
        }
    });
    