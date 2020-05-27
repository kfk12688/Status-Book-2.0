class TableHandler {
  constructor(tableHead, tableBody, data) {
    this.tableHead = tableHead;
    this.tableBody = tableBody;
    this.data = data;
  }

  createTableHeaderRow() {
    const theadData = [];

    for (let key in this.data[0]) {
      theadData.push(key);
    }
    const tr = this.createTableElem("tr");
    const th = this.createTableElem("th", "", "", tr);
    const input = this.createInputElem(
      "checkbox",
      "selectAll",
      "",
      "",
      this.checkAll
    );
    th.appendChild(input);

    this.createTableElem("th", "", `<h5>S.No</h5>`, tr);

    theadData.map((currentValue) => {
      this.createTableElem(
        "th",
        "",
        `<h5>${currentValue.toUpperCase()}</h5><i class="fa fa-sort" id="sort"></i>`,
        tr
      );
    });

    this.tableHead.appendChild(tr);
  }

  createTableBodyRow() {
    this.data.map((currentValue, index) => {
      const tr = this.createTableElem("tr");
      const td = this.createTableElem("td", "", "", tr);

      const input = this.createInputElem(
        "checkbox",
        "",
        "checkbox",
        currentValue.id,
        this.checkSelected
      );
      td.appendChild(input);

      this.createTableElem("td", "", index + 1, tr);

      for (let key in currentValue) {
        this.createTableElem("td", "", currentValue[key], tr);
      }

      this.tableBody.appendChild(tr);
    });
  }

  checkAll() {
    var checkboxes = document.getElementsByName("checkbox");
    for (var checkbox of checkboxes) {
      checkbox.checked = this.checked;
      if (this.checked) {
        checkbox.parentElement.parentElement.style.background = "#1ab394";
        checkbox.parentElement.parentElement.style.color = "white";
      } else {
        checkbox.parentElement.parentElement.style.background = "white";
        checkbox.parentElement.parentElement.style.color = "#676A6C";
      }
    }
  }

  checkSelected() {
    let param = [];
    const checkBoxes = document.getElementsByTagName("input");

    for (let i = 0; i < checkBoxes.length; i++) {
      if (checkBoxes[i].checked == true) {
        param.push(checkBoxes[i].value);
        checkBoxes[i].parentElement.parentElement.style.background = "#1ab394";
        checkBoxes[i].parentElement.parentElement.style.color = "white";
      } else {
        checkBoxes[i].parentElement.parentElement.style.background = "white";
        checkBoxes[i].parentElement.parentElement.style.color = "#676A6C";
      }
    }
    // alert(param);
  }

  createTableElem(elemName, elemClass, elemInnerHtml, elemAppend) {
    const elem = document.createElement(elemName);
    if (elemClass) elem.className = elemClass;
    if (elemInnerHtml) elem.innerHTML = elemInnerHtml;
    if (elemAppend) elemAppend.appendChild(elem);
    return elem;
  }

  createInputElem(elemtype, elemId, elemName, elemValue, elemClickEvent) {
    const input = document.createElement("input");
    input.type = elemtype;
    if (elemId) input.id = elemId;
    if (elemName) input.name = elemName;
    if (elemValue) input.value = elemValue;
    if (elemClickEvent) input.addEventListener("click", elemClickEvent);
    return input;
  }
}
