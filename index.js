function handleSubmit(event) {
  event.preventDefault();

  const Name = document.getElementById("Name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptTerms = document.getElementById("acceptTerms").checked;

  const userData = {
    Name,
    email,
    password,
    dob,
    acceptTerms,
  };

  saveEntry(userData);

  document.getElementById("registrationForm").reset();

  updateEntryTable();
}

let entries = [];

function saveEntry(entry) {
  entries.push(entry);
}

function updateEntryTable() {
  const entriesTable = document.getElementById("entriesTable");
  const tbody = entriesTable.getElementsByTagName("tbody")[0];

  tbody.innerHTML = "";

  if (entries.length > 0) {
    entries.forEach((entry) => {
      const { Name, email, password, dob, acceptTerms } = entry;
      const newRow = tbody.insertRow();

      const NameCell = newRow.insertCell();
      const emailCell = newRow.insertCell();
      const passwordCell = newRow.insertCell();
      const dobCell = newRow.insertCell();
      const acceptTermsCell = newRow.insertCell();

      NameCell.textContent = Name;
      emailCell.textContent = email;
      passwordCell.textContent = password;
      dobCell.textContent = dob;
      acceptTermsCell.textContent = acceptTerms ? "Accepted" : "Not Accepted";
    });
  }
}

updateEntryTable();

const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", handleSubmit);
