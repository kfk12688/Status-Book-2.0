"use strict";

function RequestHandler() {
  try {
    this.constructor();
  } catch (error) {
    console.log(error);
  }
}

RequestHandler.prototype = {
  constructor: function () {},

  getData: async function (url) {
    const response = await fetch(url, {
      method: "GET",
    });
    const resData = await response.json();
    return resData;
  },

  addData: async function (url, data) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
  },

  updateData: async function (url, data) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
  },

  deleteData: async function (url) {
    const response = await fetch(url, {
      method: "DELETE",
    });
    const resData = await response.json();
    return resData;
  },
};
