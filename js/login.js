var login_button = document.getElementById("login_btn");
var checkInputs = function () {
  var user_name = document.getElementById("user").value;
  var password = document.getElementById("pass").value;
  console.log(user_name + "" + password);
};

var proceedLogin = function () {
  checkInputs();
};

login_button.addEventListener("click", proceedLogin);
