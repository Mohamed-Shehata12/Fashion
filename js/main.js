function validateForm() {
  let firstName = document.getElementById("form6Example1").value;
  let textError = document.getElementById("text-error");
  let LastName = document.getElementById("form6Example2").value;
  let lastError = document.querySelector("#last-error");
  let email = document.getElementById("form6Example5").value;
  let emailError = document.querySelector("#email-error");
  let phone = document.getElementById("form6Example6").value;
  let phoneError = document.querySelector("#phone-error");

  // First name
  if (firstName === "") {
    textError.innerHTML = "* First Name Is Empty";
    return false;
  } else if (firstName.length < 3) {
    textError.innerHTML = "* Name Must Be At Least 3 Characters";
    return false;
  } else if (firstName.length >= 3) {
    textError.style.display = "none";
    document.getElementById("form6Example2").focus();
  }

  // Last name
  if (LastName === "") {
    lastError.innerHTML = "First Name Is Empty";
    return false;
  } else if (LastName.length < 3) {
    lastError.innerHTML = "Name Must Be At Least 3 Characters";
    return false;
  } else if (LastName.length >= 3) {
    lastError.style.display = "none";
    document.getElementById("form6Example5").focus();
  }

  //Email
  if (email === "") {
    emailError.innerHTML = "Email is required";
    return false;
  } else if (email !== "") {
    document.getElementById("form6Example6").focus();
  }

  //phone
  if (phone.length < 11) {
    phoneError.innerHTML = "Phone is required";
  } else {
    alert("Done");
    return true;
  }
}

//Start Dark And Light Mode
function DarkToggle() {
  let body = document.body;
  let lightDate = document.getElementById("light-Date");
  var newP = document.getElementById("new-p");
  let footer = document.getElementById("footer");
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  newP.style.color = "#2e2e2e";
  footer.style.color = "#fff";
}
//End Dark And Light Mode

// Start Date
function clockTime() {
  var dateTime = new Date();
  var hours = dateTime.getHours();
  var minutes = dateTime.getMinutes();
  var seconds = dateTime.getSeconds();
  var timeOut = document.getElementById("clock");
  var timeZone = "AM";
  if (hours == 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
    timeZone = "PM";
  }
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var time = `${hours}  : ${minutes} : ${seconds} ${timeZone}`;
  timeOut.innerHTML = time;
  setTimeout(clockTime, 1000);
}
clockTime();
// End Date

//Email js
function sendMai1() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_12iurzp";
  const templateID = "template_2jr6ngi";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("your message sent successfully");
    })
    .catch((err) => console.log(err));
}


