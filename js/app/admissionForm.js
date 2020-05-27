// Form
const applicationForm = document.getElementById('applicationForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const dob = document.getElementById('dob');
const gender = document.getElementById('gender');
const emailID = document.getElementById('emailID');
const mobileNumber = document.getElementById('mobileNumber');

const tableBody = document.getElementById('tableBody');
// Navigation Menu
const newApplicationMenu = document.getElementById('newApplicationMenu');
const applicantDataMenu = document.getElementById('applicantDataMenu');
// Content box
const newApplicationBox = document.getElementById('newApplicationBox');
const applicantDataBox = document.getElementById('applicantDataBox');

function initializeEventListners() {
  document.querySelector('DOMContentLoaded');
  // newApplicationMenu.parentElement.className = 'active';
  // newApplicationMenu.addEventListener('click', loadApplicantMenu);
  // applicantDataMenu.addEventListener('click', loadapplicantDataMenu);
  applicationForm.addEventListener('submit', addApplicant);
}

// Global Objects
let data;

function addApplicant(e) {
  let userData = {
    firstName: firstName.value,
    lastName: lastName.value,
    dob: dob.value,
    gender: gender.value,
    emailID: emailID.value,
    mobileNumber: mobileNumber.value,
  };
  // let count = Object.keys(userData).length;
  for (let key in userData) {
    let val = userData[key];

    // if (val.value === '') {
    //   const span = document.createElement('span');
    //   span.className = 'form-text m-b-none text-danger';
    //   span.innerHTML = 'This Field is Mandatory';

    //   const parentElem = val.parentElement;
    //   parentElem.parentElement.className = 'form-group row has-error';
    //   parentElem.appendChild(span);
    // }
  }

  data.push(userData);
  localStorage.setItem('data', JSON.stringify(data));
  userData = {};
  applicationForm.reset();

  e.preventDefault();
}

function viewApplicantDatas() {
  data = JSON.parse(localStorage.getItem('data'));
  if (data !== null) {
    data.forEach((element, index, array) => {
      let obj = array[index];
      const tr = document.createElement('tr');

      for (let key in obj) {
        const td = document.createElement('td');
        td.innerHTML = obj[key];
        tr.appendChild(td);
      }

      tableBody.appendChild(tr);
    });
  } else if (data === null) {
    data = [];
  }
}

// function loadApplicantMenu(e) {
//   applicantDataBox.style.visibility = 'hidden';
//   applicantDataMenu.parentElement.classList.remove('active');
//   newApplicationBox.style.visibility = 'visible';
//   newApplicationMenu.parentElement.className = 'active';

//   e.preventDefault();
// }

// function loadapplicantDataMenu(e) {
//   applicantDataBox.style.visibility = 'visible';
//   applicantDataMenu.parentElement.className = 'active';
//   newApplicationBox.style.visibility = 'hidden';
//   newApplicationMenu.parentElement.classList.remove('active');
//   e.preventDefault();
// }

// Load All Event Listners
initializeEventListners();
// Load Applicant Datas in table
viewApplicantDatas();
// Load Menu
