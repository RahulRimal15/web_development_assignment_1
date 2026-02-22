const button = document.getElementById("Btn"); 
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "Creating account...";
  button.disabled = true; 

  const signPromise = new Promise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, 2000); 
  });

  signPromise.then(function() {
    message.textContent = "Account created successfully!";
  });
});