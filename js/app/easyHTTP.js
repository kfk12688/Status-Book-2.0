class easyHTTP {
  // constructor() {
  //   this.http = new XMLHttpRequest();
  // }

  //Make an HTTP GET Request
  // get(url, callback) {
  //   this.http.open("GET", url, true);
  //   let self = this;

  //   this.http.onload = function () {
  //     if (self.http.status === 200) {
  //       callback(null, self.http.responseText);
  //     } else {
  //       callback("Error" + self.http.status);
  //     }
  //   };

  //   this.http.send();
  // }

  // Make an HTTP POST Request
  // post(url, data, callback) {
  //   this.http.open("POST", url, true);

  //   let self = this;
  //   this.http.onload = function () {
  //     if (self.http.status === 200) {
  //       callback(null, self.http.responseText);
  //     } else {
  //       callback("Error" + this.http.status);
  //     }
  //   };

  //   this.http.send(JSON.stringify(data));
  // }

  // get(url) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => resolve(data.value))
  //       .catch((err) => reject(err));
  //   });
  // }

  // post(url, data) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: "POST",
  //       body: JSON.stringify(data),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => resolve(data))
  //       .catch((err) => reject(err));
  //   });
  // }

  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();

    return resData;
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const resData = await response.json();

    return resData;
  }
}
