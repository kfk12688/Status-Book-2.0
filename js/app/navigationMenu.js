const sideMenu = document.getElementById("side-menu");

const DOMLoaded = document.querySelector("DOMContentLoaded");

if (1) {
  const menuObj = {
    "Add Student": "addStudent.html",
    "View StudentDetails": "viewStudentDetails.html",
    "Student Mark Details": "studentMarkDetails.html",
  };
  for (let key in menuObj) {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.setAttribute("href", menuObj[key]);
    link.id = key;

    const icon = document.createElement("i");
    icon.className = "fa fa-user-circle";

    const span = document.createElement("span");
    span.className = "nav-label m-l-xs";
    span.innerHTML = key;

    li.appendChild(link);
    link.appendChild(icon);
    link.appendChild(span);

    sideMenu.appendChild(li);
  }
}