"use strict";

function viewStudentsMarkDetails() {
  try {
    this.constructor();
    this.initializeEventListners();
  } catch (error) {
    console.log(error);
  }
}

viewStudentsMarkDetails.prototype = {
  constructor: function () {
    this.getMarkDetails = this.getMarkDetails.bind(this);
    this.loadMarkDetails = this.loadMarkDetails.bind(this);
    this.loadMarkData = document.getElementById("loadMarkData");
    this.table = document.querySelector("table");
    this.tableHead = document.getElementById("tableHead");
    this.tableBody = document.getElementById("tableBody");
  },
  initializeEventListners: function () {
    this.loadMarkData.addEventListener("click", this.getMarkDetails);
  },
  getMarkDetails: function (event) {
    const reqHandler = new RequestHandler();
    reqHandler
      .getData(`http://127.0.0.1/api/studentApi.php`)
      .then((data) => this.loadMarkDetails(data.value))
      .catch((err) => console.log(err));
    event.preventDefault();
  },
  loadMarkDetails: function (studentsMarkData) {
    const studentsMarkTable = new TableRenderer(
      this.tableHead,
      this.tableBody,
      studentsMarkData
    );
  },
};
