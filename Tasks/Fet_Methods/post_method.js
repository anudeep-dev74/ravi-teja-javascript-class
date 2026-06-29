let data = [
  {
    studentId: "ST1001",
    studentName: "Anudeep Pusapati",
    branch: "Computer Science",
    year: 4,
    cgpa: 8.75,
    subjects: ["Java", "SQL", "Spring Boot", "REST API"],
  },
  {
    studentId: "ST1002",
    studentName: "Rahul Sharma",
    branch: "Information Technology",
    year: 3,
    cgpa: 8.42,
    subjects: ["Python", "DBMS", "Computer Networks", "Operating Systems"],
  },
  {
    id: 3,
    studentId: "ST1003",
    studentName: "Priya Reddy",
    branch: "Electronics and Communication",
    year: 2,
    cgpa: 9.1,
    subjects: [
      "Digital Electronics",
      "Signals",
      "C Programming",
      "Mathematics",
    ],
  },
];

let options = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    }
}

for(i = 0; i < data.length; i++){
    let obj = data[i];
    options.body = JSON.stringify(obj);
    fetch("http://localhost:3000/student", options)
        .then(res => {
            if(res.ok){
                console.log(res.status, res.statusText);
            }else {
                console.log("Some thing wrong");
            }
        }).catch(res => console.log(res))
}
