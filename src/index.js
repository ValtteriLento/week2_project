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
    const table = document.getElementById("table");

    let data = {
      username: document.getElementById("input-username"),
      email: document.getElementById("input-email"),
      address: document.getElementById("input-address"),
      admin: document.getElementById("input-admin"),
    };

    let newTableRow = document.createElement("tr");

    newTableRow.innerHTML = (
      <tr>
        <td>data.username.value</td>
        <td>data.email.value</td>
        <td>data.address.value</td>
        <td>data.admin.value</td>
      </tr>
    );

    table.appendChild(newTableRow);
  });
}
