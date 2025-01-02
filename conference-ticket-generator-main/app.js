let formName = document.getElementById("fullName");
let formEmail = document.getElementById("Mail");
let formUsername = document.getElementById("gitHub");
let mainForm = document.getElementById("mainForm");

let formError = document.getElementsByClassName("error");
let formExclamIcon = document.getElementsByClassName("exclam");
let formCheckIcon = document.getElementsByClassName("check");

let valid = (id, serial, message, type = "text") => {
  const value = id.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (value === "") {
    formError[serial].innerHTML = message;
    id.style.border = "2px solid red";
    formExclamIcon[serial].style.opacity = "1";
    formCheckIcon[serial].style.opacity = "0";
  } else if (type === "email" && !emailRegex.test(value)) {
    formError[serial].innerHTML = "Enter a valid email address";
    id.style.border = "2px solid red";
    formExclamIcon[serial].style.opacity = "1";
    formCheckIcon[serial].style.opacity = "0";
  } else {
    formError[serial].innerHTML = "";
    id.style.border = "2px solid green";
    formExclamIcon[serial].style.opacity = "0";
    formCheckIcon[serial].style.opacity = "1";
  }
};

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();

  valid(formName, 0, "Username cannot be blank");
  valid(formEmail, 1, "Email cannot be blank", "email");
  valid(formUsername, 2, "GitHub username cannot be blank");
});
