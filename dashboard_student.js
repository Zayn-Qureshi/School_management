// Simple interactivity for student dashboard quick actions
document.getElementById('viewCoursesBtn').addEventListener('click', () => {
  alert('Opening My Courses...');
});

document.getElementById('openAssignmentsBtn').addEventListener('click', () => {
  alert('Opening Assignments...');
});

document.getElementById('messageTeacherBtn').addEventListener('click', () => {
  const msg = prompt('Write a message to your teacher:');
  if (msg) alert('Message sent (demo): ' + msg);
});