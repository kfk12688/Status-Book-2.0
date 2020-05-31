export default class TableRenderer {
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
      "",
      this.checkAll
    );
    th.appendChild(input);

    this.createTableElem("th", "text-center", `<h5>S.No</h5>`, tr);

    theadData.map((currentValue) => {
      this.createTableElem(
        "th",
        `${currentValue}_col_head`,
        `<h5>${currentValue.toUpperCase()}</h5>`,
        tr
      );
      this.listColumnNames(currentValue);
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
    const checkBoxes = document.getElementsByClassName("rowCheckbox");

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

  hideColumn() {
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
  }

  createTableElem(elemName, elemClass, elemInnerHtml, elemAppend) {
    const elem = document.createElement(elemName);
    if (elemClass) elem.className = elemClass;
    if (elemInnerHtml) elem.innerHTML = elemInnerHtml;
    if (elemAppend) elemAppend.appendChild(elem);
    return elem;
  }

  createInputElem(
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
  }

  listColumnNames(columnName) {
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
  }
}
