var login_button = document.getElementById("login_btn");
alert();
var checkInputs = function (user_name, password) {
  if (user_name === "") {
    return {
      status: false,
      message: "Enter User Name",
    };
  }

  if (password === "") {
    return {
      status: false,
      message: "Enter Password",
    };
  }
  return {
    status: true,
    message: "",
  };
};

var checkUserNameAndPassword = function (user_name, password, ken_kalonia) {
  alert(user_name);
};

var userNameAndPasswordStatus = function (status) {
  if (status === true) {
    alert("password matched");
  } else {
    alert("Wrong username or password");
  }
};

var proceedLogin = function () {
  var user_name = document.getElementById("user").value;
  var password = document.getElementById("pass").value;

  var input_status = checkInputs(user_name, password);
  if (input_status.status === false) {
    alert(input_status.message);
    return;
  }
  checkUserNameAndPassword(user_name, password, userNameAndPasswordStatus);
};

login_button.addEventListener("click", proceedLogin);
