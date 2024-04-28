function nextPassword() {
  var email = document.querySelector('.email1').value;
  var password = document.querySelector('.pass1').value;
    
  if(email.trim() === "" || password.trim() === "") {
    alert("Please enter both email and password.");
    return;
  }
    
  var userJSON = localStorage.getItem(email);

  if(userJSON) {
    var user = JSON.parse(userJSON);
      
    if(user.password === password) {
      alert("Sign in successful!");
          window.location.href = "1/index.html";
    } else {
      alert("Incorrect password. Please try again.");
    }
  } else {
    alert("User not found. Please sign up first.");
  }
}