const loadData = document.getElementById("loadData");
const table = document.querySelector("table");
const tableHead = document.getElementById("tableHead");
const tableBody = document.getElementById("tableBody");
const batch = document.getElementById("batch");
// const department = document.getElementById("department");

const reqHandler = new requestHandler();
// const tableHandler = new TableHandler();

function initializeEventListners() {
  document.querySelector("DOMContentLoaded");
  loadData.addEventListener("click", getStudentDetails);
}

// Fetch Student Details
function getStudentDetails(event) {
  reqHandler
    .getData(`http://127.0.0.1/api/studentApi.php?batch=${batch}`)
    .then((data) => setState(data, loadDataTable))
    .catch((err) => console.log(err));
  event.preventDefault();
}

// Load Student Details Table
function loadDataTable(state) {
  const tab = new TableRenderer(tableHead, tableBody, state.data);
  tab.createTableHeaderRow();
  tab.createTableBodyRow();
  resizableGrid(table);
}

let state;
function setState(data, callback) {
  state = {
    data: data.value,
  };
  console.log(state);
  return callback(state);
}

function stateChange(state, callback) {
  return callback(state);
}

initializeEventListners();
