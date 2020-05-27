const http = new easyHTTP();

const data = {
  id: "1",
  regno: "710311104001",
  first_name: "Aarthie",
  last_name: "KS",
  dob: "",
  gender: "",
  email_id: "",
  mobile_number: "",
  address: "",
  relegion: "",
  nationality: "",
};

// Get Student Details
http
  .get("http://127.0.0.1/RESTAPI/viewStudents.php")
  .then((data) => console.log(data.value))
  .catch((error) => console.log(error));

// http
//   .post("http://127.0.0.1/RESTAPI/addStudent.php?", data)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// http.post("http://127.0.0.1/RESTAPI/addStudent.php?", data, function (
//   error,
//   response
// ) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });
