# 🎓 School Management System

A modern, responsive school management system with role-based dashboards and a clean, minimalist design.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🚀 Live Demo

🔗 [Launch the project](https://zayn-qureshi.github.io/School_management/)

## ✨ Features

### 🎨 Modern UI/UX Design
- **Clean Minimalist Login Page** with split-screen layout
- **Vibrant Color-Coded Dashboards** for each user role
- **Responsive Design** that works on desktop, tablet, and mobile
- **Inter Font** for a professional, modern look

### 🎭 Role-Based Access

#### 🟣 Student Dashboard (Indigo Theme)
- View enrolled courses and grades
- Check upcoming assignments
- Access class schedule
- Track academic progress

#### 🟢 Teacher Dashboard (Emerald Theme)
- Manage classes and students
- View teaching schedule
- Track class performance
- Quick actions for common tasks

#### 🟠 Admin Dashboard (Amber Theme)
- System-wide overview
- Manage users and permissions
- View analytics and reports
- System administration tools

### 🎨 Visual Enhancements

- **Colored Sidebars**: Full-color backgrounds with white text for high contrast
  - Student: Vibrant Indigo (`#6366f1`)
  - Teacher: Fresh Emerald (`#10b981`)
  - Admin: Warm Amber (`#f59e0b`)
- **Theme-Specific Accents**: Colored top borders on stats cards
- **Interactive Elements**: Smooth hover effects and transitions
- **Accessibility**: High contrast ratios for readability

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Zayn-Qureshi/School_management.git
cd School_management
```

2. Open `index.html` in your web browser

### 🔐 Demo Credentials

| Role | Username | Password |
|------|----------|----------|
| Admin | `admin` | `admin123` |
| Teacher | `teacher` | `teach123` |
| Student | `student` | `stud123` |

> These credentials are for demonstration purposes only.

## 📁 Project Structure

```
School_management/
├── index.html              # Login page
├── dashboard_student.html  # Student dashboard
├── dashboard_teacher.html  # Teacher dashboard
├── dashboard_admin.html    # Admin dashboard
├── style.css              # Main stylesheet (900+ lines)
├── script.js              # Login authentication
├── dashboard_student.js   # Student dashboard logic
├── dashboard_teacher.js   # Teacher dashboard logic
├── dashboard_admin.js     # Admin dashboard logic
├── login_bg.png          # Login page background image
└── README.md             # This file
```

## 🎨 Color Palette

### Role-Specific Themes

| Role | Primary Color | Light Variant | Usage |
|------|--------------|---------------|-------|
| **Student** | Indigo `#6366f1` | Light Indigo `#e0e7ff` | Sidebar, buttons, accents |
| **Teacher** | Emerald `#10b981` | Light Emerald `#d1fae5` | Sidebar, buttons, accents |
| **Admin** | Amber `#f59e0b` | Light Amber `#fef3c7` | Sidebar, buttons, accents |

### Global Colors
- **Primary**: Academic Blue `#2563eb`
- **Background**: Light Gray `#f9fafb`
- **Text**: Dark Gray `#111827`
- **Muted**: Medium Gray `#6b7280`
- **Error**: Red `#ef4444`

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables
- **JavaScript**: Client-side logic and interactivity
- **Google Fonts**: Inter font family

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- **Desktop**: > 1000px (full layout)
- **Tablet**: 760px - 1000px (adjusted sidebar)
- **Mobile**: < 760px (stacked layout with horizontal navigation)

## 🎯 Key Highlights

1. **No Backend Required**: Runs entirely in the browser for easy deployment
2. **Modern CSS**: Uses CSS variables for easy theme customization
3. **Clean Code**: Well-organized and commented for easy maintenance
4. **Accessibility**: High contrast colors and semantic HTML
5. **Performance**: Lightweight with minimal dependencies

## 🔧 Customization

### Changing Theme Colors

Edit the CSS variables in `style.css`:

```css
:root {
  --theme-student: #6366f1;    /* Change student theme */
  --theme-teacher: #10b981;    /* Change teacher theme */
  --theme-admin: #f59e0b;      /* Change admin theme */
}
```

### Adding New Features

1. Update the relevant HTML file
2. Add styles to `style.css`
3. Implement logic in the corresponding JavaScript file

## 📸 Screenshots

### Login Page
Clean, modern login interface with split-screen design

### Student Dashboard
Vibrant indigo theme with course overview and grades

### Teacher Dashboard
Fresh emerald theme with class management tools

### Admin Dashboard
Warm amber theme with system-wide analytics

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Zayn Qureshi**
- GitHub: [@Zayn-Qureshi](https://github.com/Zayn-Qureshi)
- Repository: [School_management](https://github.com/Zayn-Qureshi/School_management)

## 🙏 Acknowledgments

- Design inspiration from modern web applications
- Inter font by Rasmus Andersson
- Color palette inspired by Tailwind CSS

## 📅 Version History

### v2.0.0 (Current)
- ✨ Added colored sidebars for all roles
- 🎨 Implemented role-specific color themes
- 🔄 Redesigned login page with clean minimalist approach
- 📱 Enhanced responsive design
- ⚡ Improved performance and code organization

### v1.0.0
- 🎉 Initial release with basic dashboard functionality

---

**Made with ❤️ for better school management**
