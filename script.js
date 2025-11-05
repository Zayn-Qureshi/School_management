// Login handling with loading redirect and simple validation

document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const roleInput = document.querySelector('input[name="role"]:checked');
  const errorMsg = document.getElementById('errorMsg');

  errorMsg.textContent = '';

  if(!username || !password){
    errorMsg.textContent = 'Please enter username and password.';
    return;
  }

  if(password.length < 6){
    errorMsg.textContent = 'Password must be at least 6 characters.';
    return;
  }

  const role = roleInput ? roleInput.value : 'student';

  // Demo credentials (replace with real auth in production)
  const creds = {
    admin: {user: 'admin', pass: 'admin123'},
    teacher: {user: 'teacher', pass: 'teach123'},
    student: {user: 'student', pass: 'stud123'}
  };

  let target = null;
  if(username === creds.admin.user && password === creds.admin.pass && role === 'admin'){
    target = 'dashboard_admin.html';
  } else if(username === creds.teacher.user && password === creds.teacher.pass && role === 'teacher'){
    target = 'dashboard_teacher.html';
  } else if(username === creds.student.user && password === creds.student.pass && role === 'student'){
    target = 'dashboard_student.html';
  } else {
    errorMsg.textContent = 'Invalid credentials for selected role.';
    return;
  }

  // Save target and username then show loading page
  sessionStorage.setItem('postLoginTarget', target);
  sessionStorage.setItem('postLoginUser', username);
  window.location.href = 'loading.html';
});