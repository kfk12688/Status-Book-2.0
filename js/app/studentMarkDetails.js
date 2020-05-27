let table = document.getElementsByTagName('table')[0];
const tableBody = document.getElementById('tableBody');
const loadData = document.getElementById('loadData');
const studentsList = document.getElementById('studentsList');
const regno = document.getElementById('regno');
const name = document.getElementById('name');

function initializeEventListners() {
  document.querySelector('DOMContentLoaded');
  loadData.addEventListener('click', getTableData);
  // regno.addEventListener('keyup', getFilterValues);
  // name.addEventListener('keyup', getFilterValues);
  // getListofStudents();
}

let postData = '';

function requestHandler(method, url, postData, callBack) {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open(method, url, true);
  xmlHttp.send(postData);
  xmlHttp.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
      return callBack(this.responseText);
    }
  };
}

function getTableData(e) {
  const getUrl = 'http://127.0.0.1/RESTAPI/viewStudentMarkDetails.php';
  requestHandler('GET', getUrl, postData, loadTableData);
  e.preventDefault();
}

function loadTableData(response) {
  JSON.parse(response).map((currentElem, index) => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    tr.appendChild(td);
    tr.appendChild(td);
    for (let key in currentElem) {
      const td = document.createElement('td');
      td.innerHTML = currentElem[key];
      tr.appendChild(td);
    }
    tableBody.appendChild(tr);
  });
  resizableGrid(table);
}

function getListofStudents() {
  const url = 'http://127.0.0.1/RESTAPI/viewStudents.php';
  return requestHandler('GET', url, postData, loadListofStudents);
}

function loadListofStudents(response) {
  const select = document.createElement('select');
  select.className = 'chosen-select';
  select.setAttribute('multiple', true);
  select.setAttribute('tabindex', 4);
  select.style.width = '350px';

  JSON.parse(response).map((currentElem, index) => {
    const option = document.createElement('option');
    option.value = currentElem.regno;
    option.innerHTML = currentElem.regno;
    select.appendChild(option);
    studentsList.append(select);
  });
}

function getFilterValues(id, index) {
  const filter = document.getElementById(id).value.toUpperCase();
  let tr = tableBody.getElementsByTagName('tr');
  let td, i, txtValue;
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[index];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }

  // alert(regno.value.toUpperCase());
}

initializeEventListners();
