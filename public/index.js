window.addEventListener('load', async () => {

  // References
  const emailRef = document.getElementById("email");
  const passwdRef = document.getElementById("password");
  const progressRef = document.querySelector(".progress-bar");

  // Functions
  function updateProgressBar() {

    let percent = 0;

    // Stength on basis of 'length'
    if (passwdRef.value.length >= 8)
      percent += 60;
    else if (passwdRef.value.length >= 6)
      percent += 30;
    else if (passwdRef.value.length >= 4)
      percent += 20;
    else if (passwdRef.value.length >= 2)
      percent += 10;

    // Strength on basis of 'character'
    if (passwdRef.value.search(/[A-Z]+/g) !== -1)
      percent += 10;
    if (passwdRef.value.search(/[a-z]+/g) !== -1)
      percent += 10;
    if (passwdRef.value.search(/[0-9]+/g) !== -1)
      percent += 10;
    if (passwdRef.value.search(/[!@#\$%\^\&*\)\(+=._-]+/g) !== -1)
      percent += 10;

    progressRef.style.width = percent + '%';

  }

  // Email validator
  emailRef.addEventListener('keyup', () => {

    const val = emailRef.value;
    // Simple email regex validator

    if (val.search(/^[a-z0-9\.]+@[a-z0-9\.]+$/g) !== -1) {
      emailRef.classList.remove("is-invalid");
      emailRef.classList.add("is-valid");
    }
    else {
      emailRef.classList.remove("is-valid");
      emailRef.classList.add("is-invalid");
    }
  });

  // Password Validator
  passwdRef.addEventListener('keyup', (evt) => {

    updateProgressBar();
    const val = passwdRef.value;
    // Simple password validator

    if (val.length >= 8) {
      passwdRef.classList.remove("is-invalid");
      passwdRef.classList.add("is-valid");
    }
    else {
      passwdRef.classList.remove("is-valid");
      passwdRef.classList.add("is-invalid");
    }
  });

  // login event listener
  document.getElementById('login').addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
});
