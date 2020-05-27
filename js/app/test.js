document.addEventListener('DOMContentLoaded', createMenu);
function createMenu() {
  const menu = document.getElementById('side-menu');
  const li = document.createElement('li');
  const link = document.createElement('a');
  link.setAttribute('href', '#');
  link.innerHTML =
    '<i class="fa fa-th-large"></i><span class="nav-label">Test Menu</span>';

  li.appendChild(link);
  menu.appendChild(li);
}
