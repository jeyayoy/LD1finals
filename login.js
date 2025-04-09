function validateLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-message");

  if (username === "admin123" && password === "admin123") {
  
    alert("Login successful!");
    window.location.href = "cafe.html"; 
    return false; 
  } else {
   alert("Invalid username or password.");
    return false; 
  }
}
