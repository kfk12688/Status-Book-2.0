"use strict";

(function () {
  function init() {
    var router = new Router([
      new Route("AddStudentDetail", "addStudentDetail.html", true),
      new Route("ViewStudentsDetails", "viewStudentsDetails.html"),
    ]);
  }
  init();
})();