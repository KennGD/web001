function createAccount() {
  var firstName = document.querySelector('.FirstName').value;
  var lastName = document.querySelector('.LastName').value;
    var email = document.querySelector('.Email').value;
    var password = document.querySelector('.Password').value;
    
    if(localStorage.getItem(email)) {
    alert("An account with this email already exists. Please use a different email.");
    return;
  }
    
  if(firstName.trim() === "" || lastName.trim() === "" || email.trim() === "" || password.trim() === "") {
    alert("Please enter complete name email and password.");
    return;
  }
    
  var user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
  };
    
  var userJSON = JSON.stringify(user);
    
  localStorage.setItem(email, userJSON);

  alert("Account created successfully!");
    
    window.location.href = "index.html";
}