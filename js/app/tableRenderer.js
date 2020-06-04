function TableRenderer(tableHead, tableBody, data) {
  try {
    this.constructor(tableHead, tableBody, data);
    this.initializeTableRenderer();
  } catch (error) {
    console.log(error);
  }
}

TableRenderer.prototype = {
  constructor: function (tableHeadElem, tableBodyElem, data) {
    this.tableHeadElem = tableHeadElem;
    this.tableBodyElem = tableBodyElem;
    this.data = data;
    this.tableHeader = this.tableHeader.bind(this);
    this.tableBody = this.tableBody.bind(this);
    this.checkAll = this.checkAll.bind(this);
    this.checkSelected = this.checkSelected.bind(this);
    this.checkElement = this.checkElement.bind(this);
    this.createTableElem = this.createTableElem.bind(this);
    this.createInputElem = this.createInputElem.bind(this);
    this.listColumnNames = this.listColumnNames.bind(this);
    this.hideColumn = this.hideColumn.bind(this);
  },

  initializeTableRenderer: function () {
    let validateInputData = new Promise((resolve, reject) => {
      if (this.data !== "" && this.data !== undefined) {
        resolve(this.data);
      } else {
        reject(new Error());
      }
    });

    validateInputData
      .then(() => this.tableHeader())
      .then(() => this.tableBody())
      .catch((error) => console.log(error));
  },

  tableHeader: function () {
    let theadData = [];
    const tr = this.createTableElem("tr");
    const th = this.createTableElem("th", "", "", tr);
    const input = this.createInputElem(
      "checkbox",
      "selectAll",
      "headerCheckbox",
      "",
      "",
      this.checkAll
    );
    th.appendChild(input);

    this.createTableElem("th", "text-center", `<h5>S.No</h5>`, tr);

    for (let key in this.data[0]) {
      theadData.push(key);
    }

    theadData.map((currentValue) => {
      this.createTableElem(
        "th",
        `${currentValue}_col_head`,
        `<h5>${currentValue.toUpperCase()}</h5>`,
        tr
      );
      this.listColumnNames(currentValue);
    });

    this.tableHeadElem.appendChild(tr);

    return this.tableHeadElem;
  },

  tableBody: function () {
    this.data.map((currentValue, index) => {
      const tr = this.createTableElem("tr");
      const td = this.createTableElem("td", "", "", tr);

      const input = this.createInputElem(
        "checkbox",
        "",
        "rowCheckbox",
        "checkbox",
        currentValue.id,
        this.checkSelected
      );
      td.appendChild(input);

      this.createTableElem("td", "", index + 1, tr);

      for (let key in currentValue) {
        this.createTableElem("td", `${key}_col`, currentValue[key], tr);
      }

      this.tableBodyElem.appendChild(tr);
    });
    return this.tableBodyElem;
  },

  checkAll: function () {
    const headercheckbox = document.getElementById("selectAll");
    const rowCheckbox = document.getElementsByClassName("rowCheckbox");
    if (headercheckbox.checked === true) {
      for (let i = 0; i < rowCheckbox.length; i++) {
        rowCheckbox[i].checked = true;
        this.checkElement(rowCheckbox[i], true);
      }
    } else {
      for (let i = 0; i < rowCheckbox.length; i++) {
        rowCheckbox[i].checked = false;
        this.checkElement(rowCheckbox[i], false);
      }
    }
  },

  checkSelected: function () {
    let param = [];
    const checkBoxes = document.getElementsByClassName("rowCheckbox");

    for (let i = 0; i < checkBoxes.length; i++) {
      if (checkBoxes[i].checked == true) {
        param.push(checkBoxes[i].value);
        this.checkElement(checkBoxes[i], true);
      } else {
        this.checkElement(checkBoxes[i], false);
      }
    }
    // alert(param);
  },

  checkElement: function (elem, condition) {
    if (condition == true) {
      elem.parentElement.parentElement.style.background = "#1ab394";
      elem.parentElement.parentElement.style.color = "white";
    } else {
      elem.parentElement.parentElement.style.background = "white";
      elem.parentElement.parentElement.style.color = "#676A6C";
    }
  },

  createTableElem: function (elemName, elemClass, elemInnerHtml, elemAppend) {
    const elem = document.createElement(elemName);
    if (elemClass) elem.className = elemClass;
    if (elemInnerHtml) elem.innerHTML = elemInnerHtml;
    if (elemAppend) elemAppend.appendChild(elem);
    return elem;
  },

  createInputElem: function (
    elemtype,
    elemId,
    elemClass,
    elemName,
    elemValue,
    elemClickEvent
  ) {
    const input = document.createElement("input");
    input.type = elemtype;
    if (elemId) input.id = elemId;
    if (elemClass) input.className = elemClass;
    if (elemName) input.name = elemName;
    if (elemValue) input.value = elemValue;
    if (elemClickEvent) input.addEventListener("click", elemClickEvent);
    return input;
  },

  listColumnNames: function (columnName) {
    const col = document.getElementById("tableColList");
    const list = document.createElement("li");
    list.className = "m-t-xs";
    const label = document.createElement("label");
    label.innerHTML = columnName;
    label.className = "m-l-sm";
    const input = this.createInputElem(
      "checkbox",
      "",
      "m-l-sm",
      "columnNameList",
      `${columnName}_col`,
      this.hideColumn
    );
    input.checked = true;
    col.appendChild(list);
    list.appendChild(input);
    list.appendChild(label);
  },

  hideColumn: function () {
    const checkBoxes = document.getElementsByName("columnNameList");

    for (let i = 0; i < checkBoxes.length; i++) {
      if (checkBoxes[i].checked == false) {
        let hideTableColumn = document.getElementsByClassName(
          checkBoxes[i].value
        );
        let hideTableColumnHeader = document.getElementsByClassName(
          `${checkBoxes[i].value}_head`
        );
        hideTableColumnHeader[0].style.display = "none";
        for (let j = 0; j < hideTableColumn.length; j++) {
          hideTableColumn[j].style.display = "none";
        }
      } else {
        let showTableColumn = document.getElementsByClassName(
          checkBoxes[i].value
        );
        let showTableColumnHeader = document.getElementsByClassName(
          `${checkBoxes[i].value}_head`
        );
        showTableColumnHeader[0].style.display = "";
        for (let j = 0; j < showTableColumn.length; j++) {
          showTableColumn[j].style.display = "";
        }
      }
    }
  },
};
