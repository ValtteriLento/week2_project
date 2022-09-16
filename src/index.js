import "./styles.css";

if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const submitDataButton = document.getElementById("submit-data");

  submitDataButton.addEventListener("click", function () {
    let table = document.getElementById("table");

    let newTableRow = document.createElement("tr");
    let newTableCell = document.createElement("td");

    table.appendChild(newTableRow);

    newTableCell.innerText = document.getElementById("input-username").value;
    table.appendLastChild(newTableCell);
    newTableCell.innerText = document.getElementById("input-email").value;
    table.appendLastChild(newTableCell);
    newTableCell.innerText = document.getElementById("input-address").value;
    table.appendLastChild(newTableCell);
    newTableCell.innerText = document.getElementById("input-admin").value;
    table.appendLastChild(newTableCell);
  });
}
