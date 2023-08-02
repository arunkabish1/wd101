document.addEventListener('DOMContentLoaded', () => {
  const registrationForm = document.getElementById('registrationForm');
  const userTableBody = document.querySelector('#userTable tbody');

  const userData = JSON.parse(localStorage.getItem('userData')) || [];
  userData.forEach((user) => addUserToTable(user));

  registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptedTerms = document.getElementById('acceptedTerms').checked;

    if (validateEmail(email) && validateDateOfBirth(dob) && acceptedTerms) {
      const newUser = { name, email, password, dob, acceptedTerms };
      addUserToTable(newUser);
      saveUserData(newUser);
      registrationForm.reset();
    } else {
      alert('Please provide valid Email, Date of Birth, and accept the terms.');
    }
  });

  function validateEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }

  function validateDateOfBirth(dob) {
    const currentDate = new Date();
    const birthDate = new Date(dob);
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    return age >= 18 && age <= 55;
  }

  function addUserToTable(user) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.password}</td>
      <td>${user.dob}</td>
      <td>${user.acceptedTerms ? 'Yes' : 'No'}</td>
    `;
    userTableBody.appendChild(newRow);
  }

  function saveUserData(user) {
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
    userData.push(user);
    localStorage.setItem('userData', JSON.stringify(userData));
  }
});

