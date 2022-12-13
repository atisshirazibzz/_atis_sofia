const cookie = document.cookie;
if (cookie) {

}


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
        document.cookie = "user=Atis; expires,; path=/";
        location.href = "file:///Users/asi/Desktop/desktop/schule/2022:23/LB%20Projekte/_atis_sofia/LB2/index.html";
    }
}

/*
require("User.json");
console.log(JSON.parse(user));*/
