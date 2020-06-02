function studentApplicationForm() {
  try {
    this.constructor();
    this.initializeEventListners();
  } catch (error) {
    console.log(error);
  }
}

studentApplicationForm.prototype = {
  constructor: function () {
    this.initializeEventListners = this.initializeEventListners.bind(this);
    this.submitApplicationForm = this.submitApplicationForm.bind(this);
    this.showResponseMessage = this.showResponseMessage.bind(this);
    this.applicationForm = document.querySelector("#applicationForm");
    this.message = document.getElementById("message");
  },

  initializeEventListners: function () {
    this.applicationForm.addEventListener("submit", this.submitApplicationForm);
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
    this.message.className = "alert alert-success";
    this.message.innerHTML = `New Student ${val} has been created successfully`;
    this.applicationForm.reset();
    return;
  },
};
