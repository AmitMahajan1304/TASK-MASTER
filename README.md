# TaskMaster - To-Do Application

A clean and simple task management application with deadline tracking. Built as part of the WeIntern Full Stack Web Developer Internship program - Week 1 Assignment.


## 🌟 Features

- **Add Tasks** - Create new tasks with optional deadlines
- **Delete Tasks** - Remove completed or unwanted tasks
- **Mark Complete** - Check off completed tasks
- **Deadline Tracking** - Set and view task deadlines
- **Overdue Alert** - Visual indicator for overdue tasks
- **Data Persistence** - Tasks saved in browser's localStorage
- **Responsive Design** - Works on desktop, tablet, and mobile

## 🎨 Design

- **Theme:** Fresh pista green and whitish color palette
- **Layout:** Clean card-based design using Flexbox
- **UI:** Simple and intuitive interface
- **Responsive:** Mobile-first approach

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with Flexbox
- **JavaScript** - DOM manipulation and event handling
- **LocalStorage API** - Data persistence

## 📋 Core Functionality

### Add Tasks
- Enter task description
- Optionally set a deadline date
- Click "Add Task" or press Enter

### Manage Tasks
- Check checkbox to mark task as complete
- Completed tasks show with strikethrough text
- Click delete button to remove tasks

### Deadline System
- Tasks with deadlines show date below task name
- Overdue tasks highlighted with red border
- Simple date comparison logic

### Data Storage
- All tasks automatically saved to localStorage
- Tasks persist after closing browser
- Data loads automatically on page refresh

## 🚀 How to Use

1. Open `index.html` in a web browser
2. Enter your task in the input field
3. Optionally select a deadline date
4. Click "Add Task" button
5. Check the checkbox to mark tasks complete
6. Click trash icon to delete tasks

## 📱 Responsive Features

Optimized for all screen sizes:
- **Desktop:** Full layout with side-by-side inputs
- **Tablet:** Adjusted spacing and layout
- **Mobile:** Stacked inputs for better usability

## 💻 Code Structure

### JavaScript Functions

- `addTask()` - Creates new task and adds to array
- `displayTasks()` - Renders all tasks to the page
- `deleteTask()` - Removes task from array
- `saveTasks()` - Saves tasks to localStorage
- `loadTasks()` - Loads tasks from localStorage

### Key Concepts Demonstrated

- DOM manipulation with `createElement` and `appendChild`
- Event listeners for user interactions
- Array methods (`push`, `filter`, `forEach`)
- LocalStorage for data persistence
- Date object for deadline comparison
- Responsive design with CSS media queries

## 🎯 Learning Outcomes

This project demonstrates:
- Clean and readable JavaScript code
- Proper HTML semantic structure
- CSS Flexbox for layouts
- Event handling and DOM manipulation
- Client-side data storage
- Responsive web design principles
- User-friendly interface design

## 📸 Features Walkthrough

### Empty State
When no tasks exist, a friendly message is displayed

### Active Tasks
Tasks are displayed with:
- Checkbox for completion
- Task text
- Deadline date (if set)
- Delete button

### Completed Tasks
- Checkbox marked
- Text with strikethrough
- Reduced opacity

### Overdue Tasks
- Red left border
- Light red background
- Clear visual indicator

## 🔮 Possible Future Enhancements

- Task editing capability
- Task categories or tags
- Priority levels
- Task search/filter
- Dark mode theme
- Task export functionality

## 👨‍💻 Developer

**Amit Mahajan**
- B.Tech CSE (IoT) Student at YCCE, Nagpur
- Full Stack Web Developer Intern at WeIntern
- GitHub: [@AmitMahajan1304](https://github.com/AmitMahajan1304)
- LinkedIn: [Amit Mahajan](http://www.linkedin.com/in/amitmahajan1304)
- Email: amitmahajan130403@gmail.com

## 📝 Project Context

This project is part of the **WeIntern Full Stack Web Development Internship Program - Week 1 Assignment**.

**Week 1 Requirements:**
- HTML structure ✅
- CSS styling with Flexbox ✅
- JavaScript DOM manipulation ✅
- Event handling ✅
- Input validation ✅
- Responsive design ✅

## 📄 License

This project is created for educational purposes as part of the WeIntern internship program.

---

**Built with 💚 as part of learning web development**

*Created: January 2026*
