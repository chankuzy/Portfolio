document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };
  
    fetch('https://script.google.com/macros/s/AKfycbwGwV_3T-FD2y_M14Wdj0nYaL7r_M1jRf2qL0vjS8SYF2QoEKnAHYfkF7BRyWurjmVf5g/exec', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.text())
    .then(data => alert("Message Sent: " + data))
    .catch(error => alert("Error: " + error));
  });

