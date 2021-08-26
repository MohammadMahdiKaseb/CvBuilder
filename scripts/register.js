const signUpbtn = document.getElementById("signUp");
const signInbtn = document.getElementById("signIn");
const container = document.getElementById("container");

signUpbtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInbtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// function switchTheme(e){
//     if (e.target.checked){
//         document.documentElement.setAttribute('data-theme' , 'dark');
//         localStorage.setItem('theme' , 'dark');
//  let form = document.getElementById("container")
//  form.style.backgroundColor = "#333333"
//     }
//     else{
//         document.documentElement.setAttribute('data-theme' , 'light');
//         localStorage.setItem('theme' , 'light');
//         let form = document.getElementById("container")
//         form.style.backgroundColor = "#ffffff"

//     }
// }
// toggleSwitch.addEventListener('change' , switchTheme , false)

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light');
//     }
// }

// toggleSwitch.addEventListener('change', switchTheme, false);

function testbt() {
  let Email = document.getElementById("upEmail");
  let Fname = document.getElementById("upName");
  let Password = document.getElementById("upPassword");

  console.log(Password.value);
  if (Password.value == "") {
    alert("Fill the password please!");
  } else if (Password.value.lenght < 8) {
    alert("Password length must be atleast 8 characters");
    return false;
  } else if (Password.value.lenght > 15) {
    alert("Password length must not exceed 15 characters");
  } else {
    alert("ok");
  }
  $.ajax({
    type: "POST",
    url: "https://cors-anywhere.herokuapp.com/http://162.55.12.72:3002/SignUp",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With",
    },
    data: {
      Name: Fname.value,
      Email: Email.value,
      Password: Password.value,
    },

    success: function (response) {
      console.log(response.token);
      alert("Details saved successfully!!!");
      window.localStorage.setItem("access_token", response.token);
      window.location.replace("../pages/Dashboard.html");
    },
    error: function (xhr, ajaxOptions, thrownError) {
      alert(xhr.status);
      alert(thrownError);
      alert(ajaxOptions);
    },
  });
  event.preventDefault();
}

function login() {
  let userName = document.getElementById("UserEmail");
  let Pass = document.getElementById("UserPassword");
  console.log(userName.value, Pass.value);

  if ((Pass.value = "")) {
    alert("Fill the password please!");
    return false;
  } else if (Pass.value.lenght < 8) {
    alert("Password length must be atleast 8 characters");
    return false;
  } else if (Pass.value.lenght > 15) {
    alert("Password length must not exceed 15 characters");
  } else {
    alert("ok");
  }
  $.ajax({
    type: "POST",
    url: "https://cors-anywhere.herokuapp.com/http://162.55.12.72:3002/Login",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With",
    },
    data: {
      Username: userName.value,
      Password: Pass.value,
    },

    success: function (response) {
      console.log(response);
      alert("Details saved successfully!!!");
      window.localStorage.setItem("access_token", response.token);

      window.location.replace("../pages/Dashboard.html");
    },
    error: function (xhr, ajaxOptions, thrownError) {
      alert(xhr.status);
      alert(thrownError);
      alert(ajaxOptions);
    },
  });
  event.preventDefault();
}
