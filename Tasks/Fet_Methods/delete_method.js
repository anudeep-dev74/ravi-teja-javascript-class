fetch("http://localhost:3000/student")
    .then(res => res.json())
    .then(data => {
        for(let i = 0; i < data.length; i++){
            fetch(`http://localhost:3000/student/${data[i].id}`, {"method": "DELETE"})
            .then(res => {
                if(res.ok){
                    console.log(res => res.status, res.statusText)
                }else {
                    console.log("Something went wrong")
                }
            })
            .catch(res => console.log(res));
        }
    })