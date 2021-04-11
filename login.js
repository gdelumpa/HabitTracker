var users = [
{
    username: "user",
    password: "login"
},
{
    username: "gdelumpa",
    password: "pass"
}
]

function getInfo(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var togglePopup = document.querySelector(".popup");
    var x = 0;

    for(i = 0; i< users.length; i++){
        if(username == users[i].username && password == users[i].password){
            // check if there's any habits in system
            // existing habits > go to index.html

            // non-existing habits > go to createhabit.html
            window.location.assign("createhabit.html")
            return false;
            x = 1;
        }
    }
    // if there is still no user found, then toggle pop up 
    if(x == 0){ 
        togglePopup.style.display = "flex";
        document.querySelector(".close").addEventListener("click", function(){
            document.querySelector(".popup").style.display = "none";
        })
}}

