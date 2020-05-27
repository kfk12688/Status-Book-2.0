const formData = document.getElementById("loadStudentDetails");
const table = document.querySelector("table");
const tableHead = document.getElementById("tableHead");
const tableBody = document.getElementById("tableBody");
const batch = document.getElementById("batch");
// const department = document.getElementById("department");

const reqHandler = new requestHandler();
// const tableHandler = new TableHandler();

function initializeEventListners() {
  document.querySelector("DOMContentLoaded");
  formData.addEventListener("submit", getStudentDetails);
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
  const tab = new TableHandler(tableHead, tableBody, state.data);
  tab.createTableHeaderRow();
  tab.createTableBodyRow();
  resizableGrid(table);

  const getCellValue = (tr, idx) =>
    tr.children[idx].innerText || tr.children[idx].textContent;

  const comparer = (idx, asc) => (a, b) =>
    ((v1, v2) =>
      v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
        ? v1 - v2
        : v1.toString().localeCompare(v2))(
      getCellValue(asc ? a : b, idx),
      getCellValue(asc ? b : a, idx)
    );

  // do the work...
  document.querySelectorAll("#sort").forEach((th) =>
    th.addEventListener("click", () => {
      const table = th.closest("table");
      console.log("1");
      Array.from(table.querySelectorAll("tr:nth-child(n+2)"))
        .sort(
          comparer(
            Array.from(th.parentNode.children).indexOf(th),
            (this.asc = !this.asc)
          )
        )
        .forEach((tr) => table.appendChild(tr));
    })
  );
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
