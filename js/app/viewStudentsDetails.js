function viewStudentsDetails() {
  try {
    this.constructor();
    this.initializeEventListners();
  } catch (error) {
    console.log(error);
  }
}

viewStudentsDetails.prototype = {
  constructor: function () {
    this.getStudentsDetails = this.getStudentsDetails.bind(this);
    this.loadStudentsDetails = this.loadStudentsDetails.bind(this);
    this.loadData = document.getElementById("loadData");
    this.table = document.querySelector("table");
    this.tableHead = document.getElementById("tableHead");
    this.tableBody = document.getElementById("tableBody");
  },

  initializeEventListners: function () {
    this.loadData.addEventListener("click", this.getStudentsDetails);
  },

  getStudentsDetails: function (event) {
    const reqHandler = new RequestHandler();
    reqHandler
      .getData(`http://127.0.0.1/api/studentApi.php`)
      .then((data) => this.loadStudentsDetails(data.value))
      .catch((err) => console.log(err));
    event.preventDefault();
  },

  loadStudentsDetails: function (studentsData) {
    const studentsTable = new TableRenderer(
      this.tableHead,
      this.tableBody,
      studentsData
    );
    // resizableGrid(table);
  },
};
