class requestHandler {
  async getData(url) {
    const response = await fetch(url, {
      method: "GET",
    });
    const resData = await response.json();

    return resData;
  }

  async addData(url, data) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const resData = await response.json();

    return resData;
  }

  async updateData(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    const resData = await response.json();

    return resData;
  }

  async deleteData(url) {
    const response = await fetch(url, {
      method: "DELETE",
    });
    const resData = await response.json();

    return resData;
  }
}
