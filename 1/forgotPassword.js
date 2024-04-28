function resetPassword() {
  var email = document.querySelector('.email1').value;
    
  if(email.trim() === "") {
    alert("Please enter your email.");
    return;
  }
    
  var userJSON = localStorage.getItem(email);

  if(userJSON) {
    alert("A password reset email has been sent to your email address.");
      window.location.href = "index.html";
  } else {
    alert("Email address not found. Please enter a registered email address.");
  }
}

