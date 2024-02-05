const signUpSignInBox = document.querySelector(".boxes");
//buttons
const btnSignIn = document.querySelector(".btn_signin");
const btnSignUp = document.querySelector(".btn_signup");
//Signin
const inputEmailSignIn = document.querySelector(".input_signin_email");
const inputPasswordSignIn = document.querySelector(".input_signin_password");
const btnSubmitSignIn = document.querySelector(".submit_signin");
//Signup
const inputFirstNameSignUp = document.querySelector(".input_signup_firstname");
const inputLastNameSignUp = document.querySelector(".input_signup_lastname");
const inputEmailSignUp = document.querySelector(".input_signup_email");
const inputPasswordSignUp = document.querySelector(".input_signup_password");
const btnSubmitSignUp = document.querySelector(".submit_signup");
//slider
const slider = document.querySelector(".slider");
////////////////
btnSignIn.addEventListener("click", function (e) {
  e.preventDefault();
  slider.style.left = "11px";
  signUpSignInBox.style.transform = "translateX(0)";
});

btnSignUp.addEventListener("click", function (e) {
  e.preventDefault();
  slider.style.left = "165px";
  signUpSignInBox.style.transform = "translateX(-290px)";
});

btnSubmitSignIn.addEventListener("click", async function (e) {
  e.preventDefault();
  const emailValue = inputEmailSignIn.value;
  const passwordValue = inputPasswordSignIn.value;
  const res = await fetch("http://localhost:3000/user/signin", {
    method: "POST",
    body: {
      email: emailValue,
      password: passwordValue,
    },
    headers: {
      "Content-type": "application/json",
    },
  });
  console.log(res);
});
btnSubmitSignUp.addEventListener("click", async function (e) {
  e.preventDefault();
  const firstNameValue = inputFirstNameSignUp.value;
  const lastNameValue = inputLastNameSignUp.value;
  const emailValue = inputEmailSignUp.value;
  const passwordValue = inputPasswordSignUp.value;
  const res = await fetch("http://localhost:3000/user/signup", {
    method: "POST",
    body: {
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      password: passwordValue,
    },
    headers: {
      "Content-type": "application/json",
    },
  });
  console.log(res);
});
