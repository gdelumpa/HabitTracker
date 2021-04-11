var objPeople = [
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

    for(i = 0; i< objPeople.length; i++){
        if(username == objPeople[i].username && password == objPeople[i].password){
            // check if there's any habits in system
            // existing habits > go to index.html

            // non-existing habits > go to createhabit.html
            window.location.assign("createhabit.html")
            return false;
            x = 1;
        }
    }
    if(x == 0){ 
        togglePopup.style.display = "flex";
        document.querySelector(".close").addEventListener("click", function(){
            document.querySelector(".popup").style.display = "none";
        })
}}

