document.getElementById("login_btn").addEventListener("click",proceedLogin);


var checkInputs = function()
{
    var user_name = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    console.log(user_name+""+password);
}

var proceedLogin = function()
{
    alert();
    checkInputs();
}



