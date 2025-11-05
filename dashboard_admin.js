// Demo data and chart setup for Admin Dashboard
// Requires Chart.js (included in dashboard_admin.html via CDN)

// Enrollment trend
const enrollmentCtx = document.getElementById('enrollmentChart').getContext('2d');
const enrollmentChart = new Chart(enrollmentCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Enrollment',
      data: [1000, 1100, 1150, 1200, 1245],
      borderColor: '#2563eb',
      backgroundColor: 'rgba(37,99,235,0.08)',
      tension: 0.3,
      pointRadius: 4,
      pointBackgroundColor: '#2563eb'
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: false }
    }
  }
});

// Attendance pie chart
const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');
const attendanceChart = new Chart(attendanceCtx, {
  type: 'doughnut',
  data: {
    labels: ['Present', 'Absent'],
    datasets: [{
      data: [85, 15],
      backgroundColor: ['#10b981', '#ef4444']
    }]
  },
  options: {
    responsive: true,
    cutout: '70%',
    plugins: { legend: { position: 'bottom' } }
  }
});

// Performance bar chart
const performanceCtx = document.getElementById('performanceChart').getContext('2d');
const performanceChart = new Chart(performanceCtx, {
  type: 'bar',
  data: {
    labels: ['Math', 'Science', 'English'],
    datasets: [{
      label: 'Performance %',
      data: [90, 85, 92],
      backgroundColor: ['#2563eb', '#f59e0b', '#10b981']
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, max: 100 }
    }
  }
});

// Buttons interactions
document.getElementById('addStudentBtn').addEventListener('click', () => {
  const name = prompt('Enter new student name:');
  if (name) alert(`Student "${name}" added (demo).`);
});

document.getElementById('manageRolesBtn').addEventListener('click', () => {
  alert('Open role management (demo).');
});

document.getElementById('viewReportsBtn').addEventListener('click', () => {
  alert('Opening reports (demo).');
});

document.getElementById('manageClassesBtn').addEventListener('click', () => {
  alert('Opening classes manager (demo).');
});