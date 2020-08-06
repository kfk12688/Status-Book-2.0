// getElementById wrapper
function $id(id) {
  return document.getElementById(id);
}

// asyncrhonously fetch the html template partial from the file directory,
// then set its contents to the html of the parent element
function loadHTML(url, id) {
  req = new XMLHttpRequest();
  req.open("GET", url);
  req.send();
  req.onload = () => {
    if (req.status != 200) console.log(req.statusText);
    $id(id).innerHTML = req.responseText;
    if (
      url === "./views/studentsProfileList.html" ||
      url === "./views/studentsAcademics.html"
    ) {
      loadScript();
    }
  };
}

function loadScript() {
  var options = {
    series: [
      {
        name: "2017-2021",
        data: [44, 55, 57, 56, 61],
      },
      {
        name: "2018-2022",
        data: [76, 85, 101, 98, 87],
      },
      {
        name: "2019-2023",
        data: [35, 41, 36, 26, 45],
      },
      {
        name: "2020-2024",
        data: [35, 41, 36, 26, 45],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["CSE", "EEE", "ECE", "IT", "MECH"],
    },
    yaxis: {
      title: {
        text: "Profile Counts",
      },
    },
    fill: {
      opacity: 1,
    },
    colors: ["#ed5565", "#23c6c8", "#1c84c6", "#f8ac59"],
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " Profiles";
        },
      },
    },
  };
  var options2 = {
    series: [
      {
        name: "Total",
        data: [44, 55, 57, 56, 61],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["CSE", "EEE", "ECE", "IT", "MECH"],
    },
    yaxis: {
      title: {
        text: "Total Profiles Based on Departments",
      },
    },
    fill: {
      opacity: 1,
    },
    colors: ["#1ab394"],
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " Profiles";
        },
      },
    },
  };
  var options3 = {
    series: [
      {
        name: "Total",
        data: [21, 22, 10, 28],
      },
    ],
    chart: {
      height: 350,
      type: "bar",
    },
    colors: ["#ed5565", "#23c6c8", "#1c84c6", "#f8ac59"],
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["2017-2021", "2018-2022", "2019-2023", "2020-2024"],
      labels: {
        style: {
          colors: ["#ed5565", "#23c6c8", "#1c84c6", "#f8ac59"],
          fontSize: "12px",
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " Profiles";
        },
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
  chart2.render();
  var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
  chart3.render();
}

// use #! to hash
router = new Navigo(null, true, "#!");
router.on({
  // 'app' is the id of the div element inside which we render the HTML
  "StudentsProfileList/:id/": () => {
    loadHTML("./views/studentsProfileList.html", "app");
  },
  StudentsProfiles: () => {
    loadHTML("./views/studentsProfiles.html", "app");
  },
  "StudentProfile/:id/": (params) => {
    loadHTML("./views/studentProfile.html", "app");
    console.log(params.id);
  },
  AddStudent: () => {
    loadHTML("./views/addStudentDetail.html", "app");
  },
  ViewStudents: () => {
    loadHTML("./views/viewStudentDetails.html", "app");
  },
  StudentsMarkDetails: () => {
    loadHTML("./views/viewStudentMarkDetails.html", "app");
  },
  Article: () => {
    loadHTML("./views/article.html", "app");
  },
  Paper: () => {
    loadHTML("./views/paper.html", "app");
  },
  StudentsAttendanceData: () => {
    loadHTML("./views/studentsAttendanceData.html", "app");
  },
  StudentsAcademics: () => {
    loadHTML("./views/studentsAcademics.html", "app");
  },
  StudentsAcademicData: () => {
    loadHTML("./views/studentsAcademicData.html", "app");
  },
});

// set the default route
router.on(() => {
  $id("app").innerHTML = "<h2>Here by default</h2>";
});

// set the 404 route
router.notFound((query) => {
  $id("app").innerHTML =
    "<h3>Couldn't find the page you're looking for...</h3>";
});

router.resolve();
