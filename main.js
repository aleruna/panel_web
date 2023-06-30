var globalUser;


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    fetch('Data.json')
      .then(response => response.json())
      .then(data => {
        const user = data.find(user => user['Full Name'] === username && user['EEID'] === password); 
        if (user) {
          console.log('Username and password are correct');
          
          globalUser = user['Full Name'];
          
          localStorage.setItem('user',JSON.stringify(user));
          
          window.location.href = "personal.html";
        } else {
          console.log('Username and/or password are incorrect');
        }
        
        document.getElementById("loginForm").reset();

      })
      .catch(error => {
        console.log('Error:', error);
      });
  });



