// const cookie = document.cookie;

// if (cookie) {

// }
/*
const http = require('http');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<strong>Hallo</strong>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/


function login(){
    var userNameLogin = document.getElementById("userNameLogin").value;
    var passwordLogin = document.getElementById("passwordLogin").value;
    if (userNameLogin==""||passwordLogin=="") {
        console.log("leer");
        return false;
    }
    var user = [
        {
            userName: "Atis",
            email: "atis@eyevip.ch",
            pwd: "1234"
        },
        {
            userName: "Atis2",
            email: "atis@eyevip2.ch",
            pwd: "12342"
        }
    ];
    var dieserUser;
    for (var i = 0; i < user.length; i++) {
        if (user[i]["userName"]==userNameLogin||user[i]["email"]==userNameLogin) {
            dieserUser = user[i];
            break;
        }
    }
    if (dieserUser==undefined) {
        return false;
    }
    if (dieserUser["pwd"]==passwordLogin) {
        document.cookie = "user=Atis; expires="+(Date.now()+100000000000)+"; path=/";
        location.href = "index.html";
    }
}

/*
require("User.json");
console.log(JSON.parse(user));*/
