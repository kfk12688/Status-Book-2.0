function studentApplicationForm() {
  try {
    this.constructor();
    this.initializeEventListners();
  } catch (error) {
    console.log(error);
  }
}

studentApplicationForm.prototype = {
  constructor: function () {},

  initializeEventListners: function () {
    const applicationForm = document.querySelector("#applicationForm");
    applicationForm.addEventListener("submit", this.submitApplicationForm);
  },

  submitApplicationForm: function (event) {
    const reqHandler = new RequestHandler();
    let inputData = {
      first_name: "",
      last_name: "",
      dob: "",
      gender: "",
      email_id: "",
      mobile_number: "",
      address: "",
      relegion: "",
      nationality: "",
    };

    for (let key in inputData) {
      inputData[key] = document.getElementById(key).value;
    }

    reqHandler
      .addData("http://127.0.0.1/api/studentApi.php", inputData)
      .then((data) => this.showResponseMessage(data.value))
      .catch((error) => console.log(error));
    event.preventDefault();
  },

  showResponseMessage: function (val) {
    const message = document.getElementById("message");
    message.className = "alert alert-success";
    message.innerHTML = `New Student ${val} has been created successfully`;
    const applicationForm = document.querySelector("#applicationForm");
    applicationForm.reset();
    return;
  },
};
