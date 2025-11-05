// Quick action stubs
document.getElementById('takeAttendanceBtn').addEventListener('click', () => {
  alert('Opening attendance for today\'s classes...');
});

document.getElementById('gradeAssignmentsBtn').addEventListener('click', () => {
  alert('Opening grading interface...');
});

document.getElementById('postAnnouncementBtn').addEventListener('click', () => {
  const msg = prompt('Write announcement:');
  if (msg) alert('Announcement posted: ' + msg);
});