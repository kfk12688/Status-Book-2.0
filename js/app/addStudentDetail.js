// Get Form Id to handle events
const newApplicationForm = document.getElementById("newApplicationForm");
const message = document.getElementById("message");
// Get Input Values From User
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const dob = document.getElementById("dob");
const gender = document.getElementById("gender");
const emailId = document.getElementById("emailid");
const mobileNumber = document.getElementById("mobilenumber");
const address = document.getElementById("address");
const relegion = document.getElementById("relegion");
const nationality = document.getElementById("nationality");

const reqHandler = new requestHandler();

function initializeEventListners() {
  document.querySelector("DOMContentLoaded");
  newApplicationForm.addEventListener("submit", submitNewApplication);
}

function submitNewApplication(event) {
  let inputData = {
    first_name: firstName.value,
    last_name: lastName.value,
    dob: dob.value,
    gender: gender.value,
    email_id: emailId.value,
    mobile_number: mobileNumber.value,
    address: address.value,
    relegion: relegion.value,
    nationality: nationality.value,
  };

  reqHandler
    .addData("http://127.0.0.1/api/studentApi.php", inputData)
    .then((data) => showMessage(data.value))
    .catch((error) => console.log(error));

  event.preventDefault();
}

function showMessage(data) {
  message.className = "alert alert-success";
  message.innerHTML = `New Student ${data} has been created successfully`;
  newApplicationForm.reset();
  return;
}

initializeEventListners();
