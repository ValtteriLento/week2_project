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
  const emptyTableButton = document.getElementById("empty-table");

  submitDataButton.addEventListener("click", function () {
    const table = document.getElementById("table");

    let newTableRow = document.createElement("tr");
    let newUsername = document.createElement("td");
    let newEmail = document.createElement("td");
    let newAddress = document.createElement("td");
    let newAdmin = document.createElement("td");

    table.appendChild(newTableRow);

    newUsername.innerText = document.getElementById("input-username").value;
    table.lastChild.appendChild(newUsername);
    newEmail.innerText = document.getElementById("input-email").value;
    table.lastChild.appendChild(newEmail);
    newAddress.innerText = document.getElementById("input-address").value;
    table.lastChild.appendChild(newAddress);
    if (document.getElementById("input-admin").checked) {
      newAdmin.innerText = "X";
    } else {
      newAdmin.innerText = "-";
    }
    table.lastChild.appendChild(newAdmin);
  });

  emptyTableButton.addEventListener("click", function () {
    const table = document.getElementById("table");

    while (table.hasChildNodes()) {
      table.removeChild(table.lastChild);
    }
  });
}
