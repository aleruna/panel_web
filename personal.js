
const user = JSON.parse(localStorage.getItem('user'))
document.getElementById('name').innerText = user['Full Name'];
document.getElementById('job').innerText = user['Job Title'];
document.getElementById('age').innerText = user['Age']
document.getElementById('department').innerText = user['Department']

