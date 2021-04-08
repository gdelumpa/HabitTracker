var objPeople = [
{
    username: "sam",
    password: "codify"
}
]

function getInfo(){
    var username = document.getElementById("username").nodeValue
    var password = document.getElementById("password").nodeValue

    for(i =0; i< objPeople.length; i++){
        if(username == objPeople[i].username && password ==objPeople[i].password){
            console.log(username + "is logged in!")
            return
        }
    }
    console.log("incorrect username or password")
}